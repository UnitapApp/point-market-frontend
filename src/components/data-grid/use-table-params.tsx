"use client";

import { SortingState } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import { isEmpty, isNotNil } from "ramda";
import { useCallback, useState } from "react";
import { TableParams } from ".";
import { defaultPaginationState } from "./constants";

type QueryParams = {
  page_size?: number;
  page_number?: number;
  sort_param?: string;
};

type UseTableParamsOptions = {
  defaultParams?: Partial<TableParams>;
  onParamsChange?: (queryParams: QueryParams) => void;
};

export function useTableParams(options?: UseTableParamsOptions) {
  const searchParams = useSearchParams();

  const initialSorting = () => {
    const sortParam = searchParams.get("sort");
    if (!sortParam) return [];

    try {
      return JSON.parse(decodeURIComponent(sortParam)) as SortingState;
    } catch {
      return [] as SortingState;
    }
  };

  const initialPagination = () => {
    const pageIndex = searchParams.get("page") ? Number(searchParams.get("page")) : null;
    const pageSize = searchParams.get("size") ? Number(searchParams.get("size")) : null;

    return {
      ...defaultPaginationState,
      ...options?.defaultParams?.pagination,

      ...(isNotNil(pageSize) && isNotNil(pageIndex)
        ? { pageIndex: isNaN(pageIndex) ? 0 : pageIndex, pageSize: isNaN(pageSize) ? 10 : pageSize }
        : undefined),
    };
  };

  const [params, setParams] = useState<TableParams>({
    sorting: options?.defaultParams?.sorting || initialSorting(),
    pagination: initialPagination(),
  });

  const updateSearchParams = useCallback(
    (newParams: TableParams) => {
      const params = new URLSearchParams(searchParams);

      if (newParams.sorting?.length) {
        params.set("sort", encodeURIComponent(JSON.stringify(newParams.sorting)));
      } else {
        params.delete("sort");
      }

      if (newParams.pagination) {
        params.set("page", newParams.pagination.pageIndex.toString());
        params.set("size", newParams.pagination.pageSize.toString());
      } else {
        params.delete("page");
        params.delete("size");
      }

      const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    },
    [searchParams],
  );

  const setTableParams = useCallback(
    (newParams: TableParams) => {
      setParams(newParams);
      updateSearchParams(newParams);

      options?.onParamsChange?.(convertToQueryParams(newParams));
    },
    [options, updateSearchParams],
  );

  return {
    setTableParams,
    convertToQueryParams,
    tableParams: params,
    queryParams: convertToQueryParams(params),
  };
}

/**
 * Utils function
 */

function convertToQueryParams(params: TableParams): QueryParams {
  const { pagination, sorting } = params;

  const qp: QueryParams = {};

  if (pagination) {
    Object.assign(qp, {
      page_size: pagination.pageSize,
      page_number: pagination.pageIndex + 1,
    });
  }

  if (sorting) {
    Object.assign(qp, {
      sort_param: toSortQueryParams(sorting),
    });
  }

  return qp;
}

function toSortQueryParams(sorts: SortingState) {
  if (isEmpty(sorts)) return undefined;
  return sorts.map((sort) => `${sort.id}:${sort.desc ? "desc" : "asc"}`);
}

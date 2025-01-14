import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import  styles  from "./DataFetcher.module.scss";
import { MAIN_COLORS } from "@/lib/COLORS";

type DataFetcherProps<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  children: (data: T) => React.ReactNode;
};

const DataFetcher = <T,>({ data, loading, error, children }: DataFetcherProps<T>) => {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <ClipLoader color={MAIN_COLORS.SECONDARY} size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.noDataContainer}>
        <p>No data available.</p>
      </div>
    );
  }

  return <>{children(data)}</>;
};

export default DataFetcher;

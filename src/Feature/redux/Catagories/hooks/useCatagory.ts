import SliceCategories from "@redux/Catagories/SliceCategories";
import { bindActionCreators } from "@reduxjs/toolkit";
import { dispatch } from "@redux/store";
import { useCallback } from "react";
export default function useCategory() {
  const { fetchCatagoriesStart: startFetch } = bindActionCreators(
    SliceCategories.actions,
    dispatch
  );
  const fetchCatagoriesStart = useCallback(startFetch, []);
  return {
    fetchCatagoriesStart,
  };
}

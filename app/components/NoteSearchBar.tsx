"use client";
import { Box, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as styles from "./styles/noteSearchBarStyle";

export const NoteSearchBar = () => {
  const [text, setText] = useState(null);
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search${text ? "?search=" + text : ""}`, {
          scroll: true,
        });
      }}
      style={{ width: "100%" }}
    >
      <Box sx={styles.inputFieldCon}>
        <OutlinedInput
          type="search"
          placeholder="Search Notes..."
          value={text}
          onChange={(e: any) => setText(e.target.value)}
          sx={styles.inputField}
        />
        <Link
          href={{
            pathname: "/search",
            query: text ? { search: text } : {},
          }}
        >
          <Box sx={styles.searchIcon}>
            <SearchIcon />
          </Box>
        </Link>
      </Box>
    </form>
  );
};

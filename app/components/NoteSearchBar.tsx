"use client";
import { Box, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      <Box
        sx={{
          p: 2,
          width: {
            xs: "100vw",
            md: "40%",
          },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <OutlinedInput
          type="search"
          placeholder="Search Notes..."
          value={text}
          onChange={(e: any) => setText(e.target.value)}
          sx={{
            maxWidth: 500,
            height: "40px",
            background: "white",
            color: "#555",
            fontFamily: "sans-serif",
            borderRadius: "5px 0 0 5px",
          }}
        />
        <Link
          href={{
            pathname: "/search",
            query: text ? { search: text } : {},
          }}
        >
          <Box
            sx={{
              height: "40px",
              background: "blue",
              width: "50px",
              borderRadius: "0 5px 5px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.2s ease-in-out",
              color: "#fff",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <SearchIcon />
          </Box>
        </Link>
      </Box>
    </form>
  );
};

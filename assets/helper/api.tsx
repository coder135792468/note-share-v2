import axios from "axios";
import { PAGE_SIZE } from "../contants/contant";

export const getAllNotes = async (ownerId: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/library/${ownerId}?size=${PAGE_SIZE}&sort=id,asec`
  );
  return res.data;
};

export const getNotes = async (
  page: number = 0,
  ownerId: any = null,
  isLibrary: boolean = false
) => {
  if (isLibrary) {
    const res = await axios.get(
      `http://localhost:8080/library/${ownerId}?size=${PAGE_SIZE}&page=${page}&sort=id,asec`
    );
    return res.data;
  } else if (ownerId) {
    const res = await axios.get(
      `http://localhost:8080/notes?size=${PAGE_SIZE}&page=${page}&sort=id,asec&ownerId=${ownerId}`
    );
    return res.data;
  } else {
    const res = await axios.get(
      `http://localhost:8080/notes?size=${PAGE_SIZE}&page=${page}&sort=id,asec`
    );
    return res.data;
  }
};

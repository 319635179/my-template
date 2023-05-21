export type Request_Opt_Type = "formdata" | "Json" | "file";
export type Request_Opt_File_Type = "word" | "excel";
export interface Request_Opt {
  type?: Request_Opt_Type;
  file_type?: Request_Opt_File_Type;
  [key: string]: any;
}

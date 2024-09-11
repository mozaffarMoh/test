"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios, { CancelTokenSource } from "axios";
import { LinearProgressWithLabel } from "./LinearProgressWithLabel";
import { IoIosCloudDownload } from "react-icons/io";

const FileUpload: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [readFiles, setReadFiles]: any = useState([]);
  const [baseFile, setBaseFile]: any = useState();
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

  const handleUpload = async () => {
    cancelTokenSourceRef.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append("formId", "12");

    readFiles.forEach((file: any, index: number) => {
      formData.append(`files[]`, file); // Use "files[]" to indicate an array
    });

    axios
      .post(
        "https://theplatform.merwas.app/api/form/formSubmtMedia",
        formData,
        {
          headers: {
            Accept: "application/json",
            Language: "en",
            Token: "z9abe71334aea8236dwell811077c7cb768f7e816290f1",
          },
          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total || 1;
            const currentProgress = Math.round(
              (progressEvent.loaded * 100) / total
            );

            setProgress(currentProgress);
          },
          cancelToken: cancelTokenSourceRef.current.token,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel("Upload canceled by the user.");
      setProgress(0);
      setReadFiles([]);
    }
  };

  useEffect(() => {
    readFiles.length > 0 && handleUpload();
  }, [readFiles]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const filePromises = Array.from(files).map((file) => {
        return new Promise<any>((resolve, reject) => {
          if (file.size > 1024 * 1024) {
            reject(
              `File "${file.name}" was rejected because it exceeds the size limit.`
            );
            return;
          }
          const reader = new FileReader();
          reader.onloadend = () => {
            const buffer = reader.result as ArrayBuffer;
            const unit8Array = new Uint8Array(buffer);
            resolve({
              name: file.name,
              type: file.type,
              data: unit8Array,
            });
          };
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
        });
      });

      const results = await Promise.allSettled(filePromises);

      const successfulUploads = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => (result as PromiseFulfilledResult<any>).value);

      // Log or handle errors
      const errors = results
        .filter((result) => result.status === "rejected")
        .map((result) => (result as PromiseRejectedResult).reason);

      if (errors.length > 0) {
        console.error("Some files failed to load:", errors);
      }
      
      setReadFiles((prev: any) => {
        const newArray = [...prev];
        newArray.push(...successfulUploads);
        return newArray;
      });
    }
    e.target.value = "";
  };

     useEffect(() => {
    const test = async () => {
      const num = 12;
      const promise = new Promise((resolve, reject) => {
        return num < 10 ? resolve(num) : reject("ss");
      });
    };
    test();
  }, []); 

  return (
    <Box>
      <Stack gap={5}>
        {readFiles.length > 0 && <LinearProgressWithLabel value={progress} />}
        <Stack>
          <input
            type="file"
            multiple
            hidden
            id="fileId"
            onChange={handleChange}
          />
          <label htmlFor="fileId">
            <Button component="span" variant="contained">
              Upload
            </Button>
          </label>
          <Button
            sx={{ width: "90px" }}
            variant="outlined"
            color="error"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Stack>

        <Stack>
          {readFiles.map((item: any, i: number) => {
            const file = new File([item.data], item.name, {
              type: item.type,
            });
            const fileUrl = URL.createObjectURL(file);
            return (
              <Stack key={i} direction={"row"} width={"fit-content"} gap={2}>
                <Typography variant="button" color={"blue"}>
                  {item?.name}
                </Typography>{" "}
                <a href={fileUrl} download={item?.name}>
                  <IoIosCloudDownload
                    cursor={"pointer"}
                    size={25}
                    color="blue"
                  />
                </a>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FileUpload;

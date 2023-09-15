import * as React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  Box,
  Button,
  Input,
  TextField,
  StepLabel,
  Step,
  Stepper,
} from "@mui/material";

const steps = ["Upload Note", "Fill Details"];

const StepperModal = ({ file, setFile, data, setData, uploadFile }: any) => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 && (
        <Box sx={{ marginTop: "20px" }}>
          <input
            onChange={(e: any) => setFile(e.target.files[0])}
            type="file"
            id="file-input"
            accept="application/pdf"
            hidden
          />
          <label htmlFor="file-input" className="file-upload-button">
            <FileUploadIcon />
            {file?.name ? (
              <span>{file.name}</span>
            ) : (
              <span>Choose File to Upload</span>
            )}
          </label>
        </Box>
      )}

      {activeStep === 1 && (
        <>
          <div className="upload-form-container">
            <Input
              onChange={(e: any) => {
                setData({
                  ...data,
                  title: e.target.value,
                });
              }}
              className="upload-form-input"
              placeholder="Enter title"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                width: "80vw",
                maxWidth: "600px",
              }}
            >
              <div className="upload-button-select-subject">
                <select
                  onChange={(e: any) => {
                    setData({
                      ...data,
                      subject: e.target.value,
                    });
                  }}
                >
                  <option selected>Select Subject</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div className="upload-button-select-subject">
                <select
                  onChange={(e: any) => {
                    setData({
                      ...data,
                      qualification: e.target.value,
                    });
                  }}
                >
                  <option selected>Select Grade</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                </select>
              </div>
            </div>
            <TextField
              className="upload-form-input"
              multiline={true}
              variant="filled"
              onChange={(e: any) => {
                setData({ ...data, desc: e.target.value });
              }}
              placeholder="Enter Note description...."
              style={{ height: "auto", marginTop: "5px" }}
            />
          </div>
        </>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button
          onClick={() =>
            activeStep == steps.length - 1
              ? uploadFile()
              : setActiveStep((prevActiveStep) => prevActiveStep + 1)
          }
        >
          {activeStep === steps.length - 1 ? "Upload" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default StepperModal;

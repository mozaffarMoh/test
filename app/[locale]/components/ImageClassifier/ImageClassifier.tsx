import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Button, Stack } from "@mui/material";
import "@tensorflow/tfjs-backend-wasm"; // Import WASM backend

const ImageClassifier: React.FC = () => {
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const initializeModel = async () => {
    const model = await mobilenet.load({
      version: 1,
      modelUrl:
        "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0/model.json",
    });
    setModel(model);
  };

  useEffect(() => {
    tf.setBackend("wasm");
    initializeModel();
  }, []);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle the prediction using the uploaded image
  const handlePredict = async () => {
    console.log("not exist", model, image);

    if (model && image) {
      console.log("loading...");
      const imgElement = document.getElementById(
        "uploadedImage"
      ) as HTMLImageElement;

      // Predict using the model
      const predictions = await model.classify(imgElement);
      console.log(predictions);

      // Get the top prediction
      const topPrediction = predictions[0]; // Get the highest confidence prediction

      setPrediction(
        `${topPrediction.className} (${(
          topPrediction.probability * 100
        ).toFixed(2)}%)`
      ); // Show class name and probability

      console.log("success!!");
    }
  };

  return (
    <Stack width={300} gap={2}>
      <h1>Image Classifier</h1>
      <input type="file" onChange={handleImageUpload} />
      {image && (
        <img id="uploadedImage" src={image} alt="Uploaded" width="200" />
      )}
      <Button variant="contained" onClick={initializeModel}>
        initialize Model
      </Button>
      <Button variant="contained" onClick={handlePredict}>
        Predict
      </Button>

      <div>
        Predicted Class:
        {prediction !== null ? (
          <h2>{prediction}</h2>
        ) : (
          <h4>Not yet predicted</h4>
        )}
      </div>
    </Stack>
  );
};

export default ImageClassifier;

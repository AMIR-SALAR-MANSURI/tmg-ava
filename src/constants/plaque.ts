import { z } from "zod";
const _plaque = {
  create: {
    url: "/Service/PlateDetectionServiceByFile",
    method: "POST",
    type: z.object({
      File: z.string(),
      ConfThresholdBoundingBox:z.number(),
      ConfThresholdOcr:z.number(),
      ReturnPlatesLocations:z.boolean(),
      ReturnBase64CroppedPlates:z.boolean(),
       ReturnBase64RectifiedPlates:z.boolean(),
      ReturnBase64OcrPlateResults:z.boolean(),


    }),
    response: z.object({
      data: z.object({
        base64_cropped_plates:z.any(),
        base64_ocr_results:z.any(),
        base64_rectified_plates:z.any(),
        ocr_results:z.any(),

    }),      
    })
  },

};

export { _plaque };

const promotionGridSchema = {
  title: "Grilla custom",
  type: "object",
  properties: {
    typeScreen:{
      title:"tipo de pantalla",
      type: "string",
      enum: ["desktop", "mobile"]
    },
  }
}

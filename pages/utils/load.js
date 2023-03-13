OzLiveness.open({
  lang: "en",
  action: ["photo_id_front", "photo_id_back", "video_selfie_blank"],
  overlay_options: {
    show_document_pattern: true,
  },
  meta: {
    client_id: "john.doe",
    meta_key: "meta_value",
  },
  on_result: function (result) {
    console.log("on_result", result);
  },
  on_complete: function (result) {
    console.log("on_complete", result);
  },
  on_close: function () {
    console.log("on_close");
  },
  on_capture_complete: function (result) {
    console.log("on_capture_complete", result);
  },
  on_error: function (error) {
    console.log("on_error", error);
  },
});

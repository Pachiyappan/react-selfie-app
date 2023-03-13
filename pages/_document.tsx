/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://web-sdk-asia.tfoco.ozforensics.com/plugin/ozliveness.css"
      />
      <script src="https://web-sdk-asia.tfoco.ozforensics.com/plugin_liveness.php?lang=en"></script>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `OzLiveness.open({ lang: "en", action: ["photo_id_front", "photo_id_back", "video_selfie_blank"], overlay_options: {show_document_pattern: true, }, meta: {client_id: "john.doe", meta_key: "meta_value",}, on_result: function (result) {console.log("on_result", result);}, on_complete: function (result) { console.log("on_complete", result); localStorage.setItem("folderId", result?.folder_id)}, on_close: function () {console.log("on_close"); },on_capture_complete: function (result) { console.log("on_capture_complete", result);}, on_error: function (error) {console.log("on_error", error); },});`,
        }}
      /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

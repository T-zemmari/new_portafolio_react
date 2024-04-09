
const DownloadButton = () => {
  const onButtonClick = () => {
    fetch("/porfolio/Cv_tarek_zemmari.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "/porfolio/Cv_tarek_zemmari.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div>
        <button
          onClick={onButtonClick}
          style={{ color: "#f7971e", fontWeight: "600" }}
        >
          Descargar CV
        </button>
      </div>
    </>
  );
};

export default DownloadButton;

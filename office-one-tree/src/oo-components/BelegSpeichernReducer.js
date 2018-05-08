import MediaUploader from'./uploader.js';


function belegSpeichernReducer(newState, action) {

    var folderId=newState.BM.rootFolder;

    var metadata = {
        name: "test.png",
        konto: newState.UI.konto,
        betrag: newState.UI.betrag
    };

    var fileMetadata = {
        "title": metadata.name,
        parents: [{ id: folderId }],
        description: JSON.stringify(metadata)
    };

    var uploader = new MediaUploader({
        file: window.globaleBelegDatei,
        token: window.accessToken,
        metadata: fileMetadata,
        onComplete: function(data) {
            window.logger.debug(data);
        }
    });
    uploader.upload();



}

export default belegSpeichernReducer;
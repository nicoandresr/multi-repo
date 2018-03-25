/*
 * index.js
 * Copyright (C) 2018 nicolasrodriguez <nicolasrodriguez@ip-10-170-111-78.sa-east-1.compute.internal>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
  'use strict';
  var video = document.querySelector("video");

  function successCallback(stream) {
    video.srcObject = stream;
    video.play();
  }

  function errorCallback(error) {
    console.log("navigator.getUserMedia error: ", error);
  }

  navigator.mediaDevices.getUserMedia({video: true}).then(successCallback).catch(errorCallback);
})();

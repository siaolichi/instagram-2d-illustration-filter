//==============================================================================
var MoveCanvaFromFocalPlane = function(canvasName, newDistanceFromOrigin){
    var focalDistanceObject = require('Scene').root.child('Device').child('Camera').child('Focal Distance');

    //find the focal length of the camera (in 3D units)

    //move the canvas a number of "focal length" away from the camera
    var canvasToMove = focalDistanceObject.child(canvasName);
    canvasToMove.renderMode = "WORLD_SPACE";
    var focalLengthSignal = focalDistanceObject.transform.z;
    canvasToMove.transform.z = focalLengthSignal.lastValue * ( newDistanceFromOrigin - 1 );
    // Diagnostics.log(canvasToMove.transform.z)
    //rescale the camera
    canvasToMove.transform.scaleX = canvasToMove.transform.scaleX.lastValue * newDistanceFromOrigin;
    canvasToMove.transform.scaleY = canvasToMove.transform.scaleY.lastValue * newDistanceFromOrigin;
    canvasToMove.transform.scaleZ = canvasToMove.transform.scaleZ.lastValue * newDistanceFromOrigin;

}

MoveCanvaFromFocalPlane("Background Canvas", 4);
MoveCanvaFromFocalPlane("Segmentation Canvas", 2);
//==============================================================================
var MoveCanvaFromFocalPlane = function(canvasName, newDistanceFromOrigin) {
	var focalDistanceObject = require('Scene')
		.root.child('Device')
		.child('Camera')
		.child('Focal Distance');

	//find the focal length of the camera (in 3D units)

	//move the canvas a number of "focal length" away from the camera
	var canvasToMove = focalDistanceObject.child(canvasName);
	canvasToMove.renderMode = 'WORLD_SPACE';
	var focalLengthSignal = focalDistanceObject.transform.z;
	canvasToMove.transform.z = focalLengthSignal.pinLastValue() * (newDistanceFromOrigin - 1);
	// Diagnostics.log(canvasToMove.transform.z)
	//rescale the camera
	canvasToMove.transform.scaleX =
		canvasToMove.transform.scaleX.pinLastValue() * newDistanceFromOrigin;
	canvasToMove.transform.scaleY =
		canvasToMove.transform.scaleY.pinLastValue() * newDistanceFromOrigin;
	canvasToMove.transform.scaleZ =
		canvasToMove.transform.scaleZ.pinLastValue() * newDistanceFromOrigin;
};

MoveCanvaFromFocalPlane('Background Canvas', 4);
MoveCanvaFromFocalPlane('Segmentation Canvas', 2);

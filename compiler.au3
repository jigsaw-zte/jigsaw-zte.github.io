#include <ButtonConstants.au3>
#include <EditConstants.au3>
#include <GUIConstantsEx.au3>
#include <WindowsConstants.au3>


$Jigsaw = GUICreate("Jigsaw官网编译器", 356, 226)
$Checkbox1 = GUICtrlCreateCheckbox("Jigsaw Master", 16, 16)
$Input1 = GUICtrlCreateInput("", 114, 16, 225, 21)
$Checkbox2 = GUICtrlCreateCheckbox("Jigsaw V1.1", 16, 48)
$Input2 = GUICtrlCreateInput("", 114, 48, 225, 21)
$Checkbox3 = GUICtrlCreateCheckbox("Jigsaw V5.0", 16, 80)
GUICtrlCreateInput("", 114, 80, 225, 21)
$Checkbox4 = GUICtrlCreateCheckbox("Jigsaw V8.0", 16, 112)
$Input3 = GUICtrlCreateInput("", 114, 112, 225, 21)
$Checkbox5 = GUICtrlCreateCheckbox("Jigsaw V9.0", 16, 144)
$Input4 = GUICtrlCreateInput("", 114, 144, 225, 21)
$Button1 = GUICtrlCreateButton("编译", 264, 184, 75, 25)
GUISetState(@SW_SHOW)


While 1
	$nMsg = GUIGetMsg()
	Switch $nMsg
		Case $GUI_EVENT_CLOSE
			Exit

	EndSwitch
WEnd

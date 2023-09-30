# Testing “add”

Status: Hire Quotient

1. INPUT in box = click SUBMIT = adds ITEM = in LIST
    
    
    | Status | Weird input  | Weird response (frontend) | Weird response (backend) | Expected outcome | Corollary / Note |
    | --- | --- | --- | --- | --- | --- |
    | DONE | all “space” input  | adds it to LIST  | no trim() used | give an error - “input is empty”  |  |
    | DONE | 1 long link | INPUT overflows outside specified box | no <style = “overflow : break-word” | INPUT breaks line even without space or space like characters | long anchor text also break out of “popup viewport”  |
    | DONE | 1 any size link | does not make it clickable in LIST  | no <a href= > found | clicking on ITEM redirects to link |  |
    | faltu  | 1000 word input | displays complete ITEM in LIST  |  | truncates big ITEMS and adds “read more” button at last  |  |
    | faltu  | multiple INPUT | lot of scrolling due to smaller popup window |  | add a sort button  |  |
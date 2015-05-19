from gopigo import *
import time 
import math 

set_speed(100)

def move_forward(feet):
  mm = feet * 304.8
  steps = mm / 11.34
  enc_tgt(1,1,steps)
  time.sleep(.1)
  fwd() 
  time.sleep(feet * 3)

def move_right():
  enc_tgt(1,0,14)
  time.sleep(.1)
  right() 
  time.sleep(4)
  
def move_left():
  enc_tgt(0,1,14)
  time.sleep(.1)
  left() 
  time.sleep(4)
  
move_forward(4)
move_right()
move_forward(3)
move_right()
move_forward(2)
move_left()
move_left()
move_forward(3)

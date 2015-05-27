from gopigo import *
set_speed(100)
led_on()
def move_left():
  enc_tgt(0,1,14)
  time.sleep(.1)
  left() 
  time.sleep(2)
while 1<2:
  while us_dist(15) > 25:
    fwd()
  stop()
  move_left()

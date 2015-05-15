from random import random #choose random number 
total_wins = 0
for i in range(10000): #repeats it 10,000 times
  num = random()
  region_wins = 0 #sets region wins to 0 
  region1 = .87
  region2 = .65
  region3 = .17
  if num <= region1:
    region_wins = region_wins + 1
  if num <= region2:
    region_wins = region_wins + 1
  if num <= region3:
    region_wins = region_wins + 1
  if region_wins >= 2:
    total_wins = total_wins + 1
percentage = total_wins / 10000 #turns it into a percentage

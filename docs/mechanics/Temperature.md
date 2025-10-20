## Weather
- Ambient temperature values (max and min):
  - Sunrise: 16°C | 10°C
  - Clear: 13°C | 10°C
  - Fog: 13°C | 10°C
  - Blood Moon: 13°C | 10°C
  - Windy: 8°C | 5°C
  - Light Rain: 8°C | 5°C
  - Heavy Rain: 8°C | 5°C
  - Snow: 5°C | 3°C

## Initial temperature
- If the fuse box is on from the start of the game (in difficulty settings), all indoor spaces start at 20°C
- If the fuse box is off or broken from the start of the game, all rooms begin at the **max** ambient temperature

## Temperature rise (no ghost presence)
- Fuse box on:
    - Raises by 0.025°C per second until 20°C
- Fuse box off:
    - If the room temperature is lower than the **min** ambient temperature, raises by 0.025°C per second until **min** ambient temperature
- Outdoor space:
    - Raises by 0.025°C per second until **max** ambient temperature

## Temperature drop
- Ghost presence:
    - Drops by 0.1°C per second when the ghost is in the room
      - Once the room temperature reaches or falls below **min** ambient temperature value, the rate slows to **0.033°C per second**
- Ambient (no ghost presence):
    - If the fuse box is off or an outdoor space, drops by 0.1°C per second until **max** ambient temperature
 
## No temperature change
- If indoor space, fuse box is off AND **min** ambient temperature < room temperature < **max** ambient temperature



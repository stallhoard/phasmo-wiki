## Overview
Ghosts in Phasmophobia have different states. A state is a phase that determines what the ghost is doing at given moment. Here are some things that are useful to keep in mind:
- Ghosts can't be in two or more states at once, only one
- Ghosts **always** go back to idle state after finishing the last one
- Ghosts can decide what to do next only after exiting idle state
- Ghosts enter specific states when performing certain actions. For example, wandering triggers the Wander state, while throwing an object triggers the Throw state. To be precise, it is the state that triggers the action, not the other way around.
## Main states
- [Idle](/states/IdleState/)
- [Favourite Room](/states/FavRoomState/)
- [Wander](/states/WanderState/)
- [Hunting](/states/HuntingState/)
- [Event](/states/EventState/)
- [FuseBox](/states/FuseBoxState/)
- [GhostAbility](/states/GhostAbilityState/)
- [Power](/states/PowerState/)

## Other states
- Door
- [Light](/states/LightState/)
- [Throwing](/states/ThrowingState/)
- [Ignite](/states/IgniteState/)
- Sink
- CCTV
- Car Alarm
- Radio
- [Painting](/states/PaintingState/)
- [Mannequin](/states/MannequinState/)
- Window Knock

and other ones..
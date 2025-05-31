## Overview
Idle state is a fundamental state in the game. It allows the ghost to transition to other states, it's some sort of a 'bridge'.

## Mechanics
- Ghosts in idle state can't do anything, they just stand still, and wait 2.0 - 6.0 seconds before exiting it
- After 2.0 - 6.0 seconds the game randomly chooses an action that is based on ghost activity, specific ghost type, difficulty

## Onryo ability
If following conditions are met, then the ghost will **reset** the counter, attempt to start a hunt and add +1 to 'Abilities used' stat:
- `onryoCandleBlowCounter` is more than 2
- The ghost has **not** hunted recently (25 second cooldown)
- Smudge timer is inactive

More: [Fire Source](/mechanics/FireSource.md)

## Hunt attempt
The ghost can attempt to start a hunt if all of the following are true:
- 50% check passed
- The ghost has not hunted recently (25 second cooldown)
- The hunt is not under smudge timer

Once these base conditions are met, whether the hunt will start depends on ghost type and sanity thresholds:
- If the ghost is a Thaye and the player is **under** (<, not <=) `75 - 6 * age` % sanity, roll *fixed* 25% chance
- Otherwise, if the `average sanity` - `hunting multiplier` is between `25 (exclusive)` and `50 (inclusive)`, roll `20%` chance
- Else if `average sanity` - `hunting multiplier` is less than 25, roll `1/3` chance

## Activity check
- First, calculate `totalActivityValue`, it's sum of `averageInsanity` + `OniMultiplier` + `YokaiMultiplier` + `IncenseMultiplier`
- Average insanity is `100 - averageSanity`
- `maxRandomAbilityValue` is based on Activity level setting: Low - 130, Medium - 115, High - 100
- `removeInteractionChanceBlock` is false by default, true if activity wish or tower card is used

If `totalActivityValue` is **greater than or equal** to a random roll between 0 and `maxRandomAbilityValue` AND (`50% chance` *or* `removeInteractionChanceBlock` is true), the ghost performs one of these actions (activity success):

- Interaction - 45.45%
- [GhostAbility](GhostAbilityState) - 36.36%
- [WanderState](WanderState) - 18.18%

---

If the total activity check doesn’t pass, the ghost rolls another chance:

- 67% (or 83.3% if Goryo)

 - 75% chance → [Favourite Room](FavRoomState)

 - 25% chance → Interaction

- 33% (or 16.7% if Goryo) → [WanderState](WanderState)


## Pseudo-code
If it's easier for you to read code instead of sentences:
```c#
using UnityEngine;

public class IdleState : MonoBehaviour
{
    private GhostAI ghostAI;
    private float totalActivityValue;
    private int maxRandomAbilityValue;
    private float wanderChanceMultiplier;

    public void Enter()
    {
        idleTimer = Random.Range(2f, 6f);
    }

    public void Execute()
    {
        idleTimer -= Time.deltaTime;
		if (!(idleTimer < 0f))
		{
			return;
		}
        if (onryoCandleBlowCounter > 2)
        {
            ghostAI.ChangeState(GhostAI.States.hunting);
            LevelStats.abilitiesUsed += 1;
            return;
        }    

		if (Random.Range(0, 2) == 1 && !hasHuntedRecently && !delayedBySmudgeStick && !isTutorial)
		{
            if (ghostType == Thaye && (100 - thayeAgeStats.huntSanityRequirement < averageInsanity))
            {
				if (Random.Range(0, 4) == 1)
				{
					ghostAI.ChangeState(GhostAI.States.hunting);
					return;
				}
            }

			if (averageInsanity + huntingMultiplier >= 50 && averageInsanity + huntingMultiplier < 75)
			{
				if (Random.Range(0, 5) == 1)
				{
					ghostAI.ChangeState(GhostAI.States.hunting);
					return;
				}
			}
			else if (num + huntingMultiplier >= 75 && Random.Range(0, 3) == 1)
			{
				ghostAI.ChangeState(GhostAI.States.hunting);
				return;
			}
		}

        // totalActivityValue = AverageInsanity + OniMultiplier + YokaiMultiplier + IncenseMultiplier
        if (totalActivityValue >= Random.Range(0, maxRandomAbilityValue) && (Random.Range(0, 2) == 1 || removeInteractionChanceBlock)) // maxRandomAbilityValue (Activity level: high = 100, medium = 115, low = 130), +50% if Shade
        	switch (Random.Range(0, 11))
			{
	 		    case 0:
			    case 1:
			    case 2:
			    case 3:
			    case 4:
				    ghostAI.ghostActivity.Interact(); // 45.45%
				    return;
			    case 5:
			    case 6:
			    case 7:
			    case 8:
				    ghostAI.ghostActivity.GhostAbility(); // 36.36%
				    return;
                default:
                    ghostAI.ChangeState(GhostAI.State.wander); // 18.18%
                    return;
			}
        else
        {
            if (Random.Range(0.0f, wanderChanceMultiplier * 3.0f) >= 1.0f) // 67% | 83.3% Goryo
            {
                if (Random.Range(0, 4) != 1) // 75% chance
                {
                    ghostAI.ChangeState(GhostAI.State.favouriteRoom);
                    return;
                }                                                                    
                else
                {
                    Interact(); // 25%
                    return;
                }
            }
            else
            {
              ghostAI.ChangeState(GhostAI.State.wander); // 33% | 16.7% Goryo
              return;
            }
        }
    }
}
```

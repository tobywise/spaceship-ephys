
# **Spaceship game for human electrophysiology**

## Running the game

Point the browser to `spaceship-game/index.html` to start the task. To run the game, just enter a subject ID and click start.

## Modifying the game

To modify aspects of the game, go to `spaceship-game/src/index.js` and look for the highlighted section (_"USE THESE SETTINGS TO MODIFY THE GAME"_).

In terms of timing, this can be modified if needed. The shorter the ITI, the less time the task takes to run. I've found that anything over 2 seconds seems to work fine, although currently it's set to 3 seconds. 

The asteroids can be made to move faster or slower. It's currently set to the speed used in the _Nature Communications_ paper, and that seemed to work fine. It essentially needs to be fast enough that it's not really possible to reactively avoid the asteroids, as we ideally want subjects pre-empting their position. If the asteroids are too slow, they can be avoided without subjects having to position themselves in advance. However - if they move too fast the game starts too feel a little too frustrating!

## Saving data

The game saves data temporarily to the browser's cache - this means that unless the cache is cleared, the data will persist, so if anything goes wrong the data will still be there.

To save data to disk, point the browser to `/saveData.html` (this page also appears once the task has been completed). This gives options to save the data for a single subject, or to save all data in the cache. There is also an option to clear the cache.

## Analyis

An example data file (for just 10 trials) is provided in the `data` directory and there is a Jupyter notebook showing how to extract and look at data in Python (`notebooks/analysis.ipynb`).

## Current issues

* The sampling rate seems a little inconsistent - this isn't a major problem, but I'll try to fix it.
* Currently it doesn't output any indication of where the safe location is. This isn't a big issue as this is set in the trial info that the game uses to determine where to place the safe locations, so we can always just link this up to the data from the task. I'll try to get it to output this information anyway though.
* Currently the task requires and internet connection (this is just for loading libraries/fonts). This can be removed if necessary.
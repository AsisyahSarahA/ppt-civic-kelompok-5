import test from 'node:test';
import assert from 'node:assert/strict';
import { isNightTime, getEffectiveTheme, clampSlideIndex } from '../types/presentation';

test('isNightTime accurately classifies 24-hour day and night', () => {
  // Noon 12:00 -> day
  const noon = new Date('2026-11-05T12:00:00');
  assert.equal(isNightTime(noon), false);

  // Morning 08:30 -> day
  const morning = new Date('2026-11-05T08:30:00');
  assert.equal(isNightTime(morning), false);

  // Evening 20:00 -> night
  const evening = new Date('2026-11-05T20:00:00');
  assert.equal(isNightTime(evening), true);

  // Late night 02:00 -> night
  const lateNight = new Date('2026-11-05T02:00:00');
  assert.equal(isNightTime(lateNight), true);

  // Sunset 18:00 -> night
  const sunset = new Date('2026-11-05T18:00:00');
  assert.equal(isNightTime(sunset), true);

  // Dawn 06:00 -> day
  const dawn = new Date('2026-11-05T06:00:00');
  assert.equal(isNightTime(dawn), false);
});

test('getEffectiveTheme respects auto mode and explicit overrides', () => {
  const noon = new Date('2026-11-05T12:00:00');
  const night = new Date('2026-11-05T22:00:00');

  // Auto mode
  assert.equal(getEffectiveTheme('auto', noon), 'day');
  assert.equal(getEffectiveTheme('auto', night), 'night');

  // Explicit overrides
  assert.equal(getEffectiveTheme('day', night), 'day');
  assert.equal(getEffectiveTheme('night', noon), 'night');
});

test('clampSlideIndex bounds index safely within slide counts', () => {
  const total = 18;
  assert.equal(clampSlideIndex(-5, total), 0);
  assert.equal(clampSlideIndex(0, total), 0);
  assert.equal(clampSlideIndex(10, total), 10);
  assert.equal(clampSlideIndex(17, total), 17);
  assert.equal(clampSlideIndex(20, total), 17);
});

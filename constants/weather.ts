interface WEATHER_TYPES {
  title: Function,
  disabled: Function,
  id: string
}
export const WEATHER_TABS: WEATHER_TYPES[] = [
  { title: () => 'Now', id: 'today', disabled: () => false },
  { title: () => 'Next 7 Days', id: 'nextSeven', disabled: () => false },
  { title: alerts => `Alerts (${alerts || 0})`, id: 'alerts', disabled: disabled => disabled }
]

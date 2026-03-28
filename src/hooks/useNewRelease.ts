import { useState, useEffect } from 'react'

export interface NewReleaseConfig {
  title: string
  subtitle?: string
  youtubeId: string
  spotifyId: string
  spotifyType?: 'track' | 'album' | 'playlist'
  spotifyAvailableAt?: string
}

const GIST_URL = 'https://gist.githubusercontent.com/NotPako/c40771747720e92ec473d2a6cffb298d/raw/new-release.json'

const DEFAULT_CONFIG: NewReleaseConfig = {
  title: 'NO NE CABEN MÉS',
  subtitle: 'Nou llançament',
  youtubeId: 'DSEOiro_eRo',
  spotifyId: '671T4hZNUgqzeNTmjNZo1B',
  spotifyType: 'track',
  spotifyAvailableAt: '',
}

export function useNewRelease() {
  const [config, setConfig] = useState<NewReleaseConfig>(DEFAULT_CONFIG)

  useEffect(() => {
    fetch(`${GIST_URL}?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(() => {})
  }, [])

  return config
}
const configs = {
  /**
   * Sun
   */
  sun: {
    uBaseAtmosMix: 0.9,
    uBloomIntensity: 4.5,
    uColor1: "#211502",
    uColor2: "#312203",
    uColor3: "#a08e76",
    uColor4: "#312203",
    uColorAtmos1: "#d14b08",
    uColorAtmos2: "#ffd682",
    uFresnelAmount: 1.2,
    uFresnelPower: 5,
    uFresnelColor: "#ff7d4e",
    uScale: 32,
    uScaleX: 1,
    uScaleY: 1,
    uScaleAtmos: 36,
    uScaleAtmosX: 1,
    uScaleAtmosY: 1,
    uSeed: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: -1,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: 1,
    uSpinAtmosY: 0,
    uStop1: 0,
    uStop2: 0.4,
    uStop3: 0.8,
    uStop4: 0.6,
    uStopAtmos1: 0.7,
    uStopAtmos2: 1,
    uTimeMult: 3.2,
    uTimeMultAtmos: 3.2,
  },
  /**
   * Mercury
   */
  mer: {
    uBaseAtmosMix: 0,
    uBloomIntensity: 2.5,
    uColor1: "#ccd1bc",
    uColor2: "#ccd1bc",
    uColor3: "#ccd1bc",
    uColor4: "#ccd1bc",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#82e3ff",
    uFresnelAmount: 0.3,
    uFresnelPower: 2,
    uFresnelColor: "#ffffff",
    uScale: 0.3,
    uScaleX: 0.1,
    uScaleY: 17,
    uScaleAtmos: 0.7,
    uScaleAtmosX: 0.2,
    uScaleAtmosY: 20,
    uSeed: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 0.5,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: -0.5,
    uSpinAtmosY: 0,
    uStop1: 0,
    uStop2: 0.3,
    uStop3: 0.5,
    uStop4: 0.7,
    uStopAtmos1: 0.4,
    uStopAtmos2: 0.6,
    uTimeMult: 0.2,
    uTimeMultAtmos: 0.2,
  },
  /**
   * Venus
   */
  ven: {
    uBaseAtmosMix: 1,
    uBloomIntensity: 1.6,
    uColor1: "#8398aa",
    uColor2: "#8398aa",
    uColor3: "#8398aa",
    uColor4: "#b1a789",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#dea55a",
    uFresnelAmount: 1.3,
    uFresnelPower: 2,
    uFresnelColor: "#e8b5aa",
    uScale: 0.3,
    uScaleX: 0.2,
    uScaleY: 11.1,
    uScaleAtmos: 0.4,
    uScaleAtmosX: 0.2,
    uScaleAtmosY: 5,
    uSeed: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 0.5,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: -0.5,
    uSpinAtmosY: 0,
    uStop1: 0,
    uStop2: 3.3,
    uStop3: 0.5,
    uStop4: -1.5,
    uStopAtmos1: 0.2,
    uStopAtmos2: 1.6,
    uTimeMult: 0.2,
    uTimeMultAtmos: 2.2,
  },
  /**
   * Earth
   */
  ear: {
    uBaseAtmosMix: 0.4,
    uBloomIntensity: 1.2,
    uColor1: "#344e9d",
    uColor2: "#3461e8",
    uColor3: "#31869e",
    uColor4: "#2e9443",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#dff8ff",
    uFresnelAmount: 0,
    uFresnelPower: 5,
    uFresnelColor: "#cae2c7",
    uScale: 1.2,
    uScaleX: 1,
    uScaleY: 1,
    uScaleAtmos: 0.2,
    uScaleAtmosX: 0.3,
    uScaleAtmosY: 3,
    uSeed: {
      value: 12,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 6,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: 7,
    uSpinAtmosY: 0,
    uStop1: 0,
    uStop2: 0.3,
    uStop3: 0.4,
    uStop4: 0.45,
    uStopAtmos1: 0,
    uStopAtmos2: 2,
    uTimeMult: 0,
    uTimeMultAtmos: 1.2,
  },
  /**
   * Mars
   */
  mar: {
    uBaseAtmosMix: 0,
    uBloomIntensity: 2.5,
    uColor1: "#791b1b",
    uColor2: "#db2121",
    uColor3: "#f24949",
    uColor4: "#ff5b5b",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#82e3ff",
    uFresnelAmount: 0.5,
    uFresnelPower: 2,
    uFresnelColor: "#ff8080",
    uScale: 0.3,
    uScaleX: 0.1,
    uScaleY: 8,
    uScaleAtmos: 0.7,
    uScaleAtmosX: 0.2,
    uScaleAtmosY: 19,
    uSeed: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 22.5,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: -0.5,
    uSpinAtmosY: 0,
    uStop1: 0,
    uStop2: 1.4,
    uStop3: 5.5,
    uStop4: 7.7,
    uStopAtmos1: 0.4,
    uStopAtmos2: 0.6,
    uTimeMult: 0.2,
    uTimeMultAtmos: 0.2,
  },
  /**
   * Jupiter
   */
  jup: {
    uBaseAtmosMix: 1,
    uBloomIntensity: 4.6,
    uColor1: "#904124",
    uColor2: "#ff4300",
    uColor3: "#b15717",
    uColor4: "#a04020",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#67a1a7",
    uFresnelAmount: 1.3,
    uFresnelPower: 4,
    uFresnelColor: "#ff7474",
    uScale: 0.4,
    uScaleX: 0.3,
    uScaleY: 2,
    uScaleAtmos: 0.2,
    uScaleAtmosX: 1,
    uScaleAtmosY: 14,
    uSeed: {
      value: 2,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 0,
    uSpinY: 0,
    uSeedAtmos: {
      value: 25,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: 0,
    uSpinAtmosY: 0,
    uStop1: -1.7,
    uStop2: -0.7,
    uStop3: -0.5,
    uStop4: 0.7,
    uStopAtmos1: 0,
    uStopAtmos2: 3.6,
    uTimeMult: 0,
    uTimeMultAtmos: 1,
  },
  /**
   * Saturn
   */
  sat: {
    uBaseAtmosMix: 0,
    uBloomIntensity: 3.1,
    uColor1: "#c17006",
    uColor2: "#8d5e0c",
    uColor3: "#793e0d",
    uColor4: "#e5af89",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#82e3ff",
    uFresnelAmount: 1.4,
    uFresnelPower: 3,
    uFresnelColor: "#fc7645",
    uScale: 0.03,
    uScaleX: 0.01,
    uScaleY: 100,
    uScaleAtmos: 0.7,
    uScaleAtmosX: 0.2,
    uScaleAtmosY: 20,
    uSeed: {
      value: 32,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 0.5,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: -0.5,
    uSpinAtmosY: 0,
    uStop1: -0.5,
    uStop2: 0,
    uStop3: 0.3,
    uStop4: 2.8,
    uStopAtmos1: 0.4,
    uStopAtmos2: 0.6,
    uTimeMult: 0.1,
    uTimeMultAtmos: 0,
  },
  /**
   * Uranus
   */
  ura: {
    uBaseAtmosMix: 0,
    uBloomIntensity: 2.3,
    uColor1: "#2b9fad",
    uColor2: "#8cb9ba",
    uColor3: "#cebab6",
    uColor4: "#d5d8ca",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#82e3ff",
    uFresnelAmount: 0.3,
    uFresnelPower: 8,
    uFresnelColor: "#ffd2c2",
    uScale: 0.2,
    uScaleX: 0.1,
    uScaleY: 10.2,
    uScaleAtmos: 0.7,
    uScaleAtmosX: 0.2,
    uScaleAtmosY: 20,
    uSeed: {
      value: 30,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 0,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: 0,
    uSpinAtmosY: 0,
    uStop1: -0.9,
    uStop2: 0.3,
    uStop3: 0.7,
    uStop4: 5.7,
    uStopAtmos1: 0.4,
    uStopAtmos2: 0.6,
    uTimeMult: 0,
    uTimeMultAtmos: 0.2,
  },
  /**
   * Neptune
   */
  nep: {
    uBaseAtmosMix: 1.3,
    uBloomIntensity: 7,
    uColor1: "#194980",
    uColor2: "#02070a",
    uColor3: "#4f61b7",
    uColor4: "#1f509a",
    uColorAtmos1: "#000000",
    uColorAtmos2: "#27535f",
    uFresnelAmount: 0.2,
    uFresnelPower: 4,
    uFresnelColor: "#f59292",
    uScale: 0.1,
    uScaleX: 0.1,
    uScaleY: 17,
    uScaleAtmos: 0.3,
    uScaleAtmosX: 0.2,
    uScaleAtmosY: 20,
    uSeed: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinX: 0.5,
    uSpinY: 0,
    uSeedAtmos: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    uSpinAtmosX: -0.5,
    uSpinAtmosY: 0,
    uStop1: -1.3,
    uStop2: -1.2,
    uStop3: 0.9,
    uStop4: 1.5,
    uStopAtmos1: 0,
    uStopAtmos2: 1,
    uTimeMult: 0.2,
    uTimeMultAtmos: 0.2,
  },
};

const getPlanetControls = planet => {
  // Get the config for the planet, return with keys prefixed with planet key underscore (mer_)
  return Object.entries(configs[planet]).reduce((acc, [key, value]) => {
    acc[`${planet}_${key}`] = value;
    return acc;
  }, {});
};

const getPlanetConfig = (planet, data) => {
  return {
    uBaseAtmosMix: data[planet + "_uBaseAtmosMix"],
    uBloomIntensity: data[planet + "_uBloomIntensity"],
    uColor1: data[planet + "_uColor1"],
    uColor2: data[planet + "_uColor2"],
    uColor3: data[planet + "_uColor3"],
    uColor4: data[planet + "_uColor4"],
    uColorAtmos1: data[planet + "_uColorAtmos1"],
    uColorAtmos2: data[planet + "_uColorAtmos2"],
    uFresnelAmount: data[planet + "_uFresnelAmount"],
    uFresnelPower: data[planet + "_uFresnelPower"],
    uFresnelColor: data[planet + "_uFresnelColor"],
    uScale: data[planet + "_uScale"],
    uScaleX: data[planet + "_uScaleX"],
    uScaleY: data[planet + "_uScaleY"],
    uScaleAtmos: data[planet + "_uScaleAtmos"],
    uScaleAtmosX: data[planet + "_uScaleAtmosX"],
    uScaleAtmosY: data[planet + "_uScaleAtmosY"],
    uSeed: data[planet + "_uSeed"],
    uSpinX: data[planet + "_uSpinX"],
    uSpinY: data[planet + "_uSpinY"],
    uSeedAtmos: data[planet + "_uSeedAtmos"],
    uSpinAtmosX: data[planet + "_uSpinAtmosX"],
    uSpinAtmosY: data[planet + "_uSpinAtmosY"],
    uStop1: data[planet + "_uStop1"],
    uStop2: data[planet + "_uStop2"],
    uStop3: data[planet + "_uStop3"],
    uStop4: data[planet + "_uStop4"],
    uStopAtmos1: data[planet + "_uStopAtmos1"],
    uStopAtmos2: data[planet + "_uStopAtmos2"],
    uTimeMult: data[planet + "_uTimeMult"],
    uTimeMultAtmos: data[planet + "_uTimeMultAtmos"],
  };
};

export { getPlanetControls, getPlanetConfig };

---
layout: about
---

# What is a Techrider?
A technical rider is a document that lists the technical requirements and setup that is needed for the performance by the event's production agency. It is shared to the event venue and organizers before the event to ensure that the requirements are fulfilled before the event.

# Venue Requirements

## Stage

Stage is the platform where the performers perform. It is a platform that is raised sufficiently above the audience's level for maximum visibility.

The stage is where all the microphones, stage monitors, most of the effects lighting, and instruments are placed.

## Trussing

Truss is a structural framework that is used to distribute forces and provide strength to the structure. In stage work, trusses are what hold up the effects lighting, lasers, PAR cans, moving head lights, blinders, etc., and some Public Address (PA) line array speakers.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="box truss.jpg" alt="Aluminium Box Truss" style="max-width: 20vw; max-height: 50vw; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Aluminium Box Truss</div>
</div>

# Audio Tech Requirements

## PA System

Public Address (PA) System is a system of speakers, amplifiers, mixers and signal processors which help propagate the sound throughout the audience. A good PA system is essential to a good experience for the audience at an event.

SPL means Sound Pressure Level, which is the measurement of how loud the sound is in decibels (logarithmic scale of power). Having a speaker capable of delivering 120dB SPL (which is enough to cause hearing loss at prolonged exposure) at the console position ensures that there is enough headroom for working with clean audio at high volumes. It does not mean that the speaker will be operated at its maximum capability the whole time; it ensures that the speaker is surely loud enough to reach the back of the crowd. As it is not operated at its limits all the time, it also helps with reducing the problem of overheating or mechanical wear and tear of the speaker.

A Line Array speaker is a system of multiple identical speakers arranged in a stack or a vertical line. The advantage of doing this is to combine all the sound waves in a controlled beam which can cover a larger distance, which reduces the overall loss in level with distance due to the summation of signals from the array of speakers.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image.jpg" alt="Line Array (L Acoustics)" style="max-height: 40vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Line Array (L Acoustics V-DOSC)</div>
</div>

Stereo uses two channels of sound (left and right) to make the sound feel more spatial or more natural. This improves the immersion of the experience. 4-way refers to the number of frequency bands which have their own driver to produce the sound of that frequency band (sub, low, mid, and high). This covers the "Full Range", and by splitting the work between 4 drivers, it can produce higher quality audio with lower distortion at increased loudness (SPL).

The matrix output in a mixer allows for creating a custom mix of the existing output (like the main L/R mix, auxiliaries, and groups). Matrix mixes give control over EQ, delay, compression etc., and for instance, can be used to boost the vocals alone (in case of the centre fill). Auxiliary send outputs allows creation of independent mixes for different purposes such as monitors, recordings, effects (FX) processing, and in this case, subs.

Cardioid pattern is a heart-like shape within which the sound input is picked up/sound output is heard. A cardioid looks like this:

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-1.png" alt="Cardioid Polar Pattern" style="max-width: 60% height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Cardioid Polar Pattern</div>
</div>

This pattern is preferred because the PA system does specifically that: address the **audience**. This sound isn't needed for the stage and should not interfere with the input sources causing a feedback loop. This pattern ensures the sound clearly reaches the audience, and only the audience. It avoids distrubing the stage or the neighbouring areas with loud sound. Achieving a cardioid output pattern with a subwoofer is a difficult task, involving multiple subwoofers, and clever polarity and delay manipulation. This is because lower frequency sounds are more omnidirectional. Higher end subwoofers (like the ones listed in the techrider) achieve this with a single enclosure.

Looking into the brands, this is obviously subject to availability. But the techrider seems to mention some models which are NOT to be used. Whats the matter with them?

- **NO VRX:** Comparing the specs sheet for the [VTX V25](https://jblpro.com/en/products/vtx-v25#specifications) (which they have explicitly mentioned) and the [VRX932LAP](https://jblpro.com/en/products/vrx932lap#specifications), it is clearly evident that VRX series is considerably lower powered than the VTX, which is not ideal for large scale events like concerts. The peak output is also slightly lower on the VRX, and it does not have a separate mid frequency driver.

- **Strictly NO HDL SERIES:** Again, comparing the [TTL 55-A](https://www.rcf.it/en/products/product-detail/ttl-55-a#specifications) with the [HDL 30-A](https://www.rcf.it/en/products/product-detail/hdl-30-a#specifications), the maximum power output of the HDL is almost half that of the TTL. Additionally, the TTL seems to have a midrange driver. Though something like the [HDL 50-A](https://www.rcf.it/en/products/product-detail/hdl-50-a#specifications) has a
midrange driver, it is still smaller and lower powered in comparison to the TTL's.

## FOH Console

The Front Of House (FOH) Console is the heart of the audio setup - where all the mixing takes place. It is where the sound engineer controls the parameters on the mixer, does their magic to make the experience a memorable one. Understandably, to do that, the sound engineer has to hear what the audience hears. Hence the techrider mentions that the FOH must be positioned at the middle of the venue. This helps the engineer to hear balanced (in panning context, hence the "equilateral triangle" formed with the FOH point, and the Left and Right Line arrays) stereo audio which ensures accurate stereo imaging.

The raised height is to prevent crowd obstruction (visibility) and it gives the engineer(s) a better position for hearing the sound. Roofing for outdoor venues is necessary to avoid direct sunlight (causes overheating of equipment) and shield the equipment from dust and rain. The 50-60ft distance from stage ensures that the sound is not too delayed for the engineer to process it.

**Strictly NO D2 RACKS:** What is a rack?

A rack is a separate unit that is usually placed near the stage that contains all the inputs and outputs for the stage mics and instruments.

Comparing the SD rack to the D2 rack... oh boy does the SD rack has enough inputs and outputs (56 each!!). The D2 rack on the other hand has 48 inputs and only 16 outputs. Moreover, it is limited at 48kHz sample rate per MADI (Multi-Audio Digital Interface - transporting multiple audio signals digitally through a single port) port and it has only 2 expansion module slots as opposed to the 14 ON THE SD RACK with 192kHz sample rate. Basically the D2 rack is way underpowered and not very expandable compared to the SD rack, and that makes the D2 not viable to be used on large scale events. 

**What is this "Waves" brand?** Waves Audio is apparently a company that makes plugins for audio processing; like EQ, compressor, reverb and more. The Waves Card is an physical expansion card that goes in the expansion slot of a console to connect it to the real-time audio processing server (computer dedicated to do the real-time digital signal processing) called Waves SoundGrid. This server can be loaded with a lot of software plugins (the power of digital is endless!) for which of course the license has to be bought from Waves. Dante cards serve a similar purpose, and Waves even sells Dante interface bridges for their servers.

Both of these cards use ethernet as their interface to the DSP server.

**No Avid Venue SC 48 and SoundCraft Vi Series:** These two consoles are old (the SC48 has a *firewire* and *MIDI* port... It does have an ethernet port but its not MADI or equivalent, its used only for controlling the console), have limited I/O, expansion capabilities, and sample rate.

## Stage Monitoring

**Monitor 🖥️?** no. In the context of audio, monitors are used to provide the performers (vocalists and instrumentalists) a way to hear a personal mix that includes (but not limited to) whatever they are outputting. This helps the performers to *monitor* their own sound. These monitors come in various forms as listed below

- **Wedge Monitors:** Shaped just like they are named, wedge monitors are wedge shaped floor monitors which are placed on the stage angled upward towards the performer. 

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image.png" alt="JBL VRX915M (Wedge Monitor)" style="max-width: 50%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">JBL VRX915M (Wedge Monitor)</div>
</div>

- **Side Fills:** These are speakers which are placed on the sides of the stage facing inward, to propagate sound to performers in case of large stages where just the wedges would not be enough. Side fills output a more general mix where all performers can hear the essential parts of the main mix.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; justify-items: center; margin: 2rem 0;">

  <div style="width: 100%; max-width: 70%;">
    <img src="image-35.png" alt="JBL SRX835" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc; font-style: italic;">JBL SRX835 (Side Fill)</div>
  </div>

  <div style="width: 100%; max-width: 70%;">
    <img src="image-36.png" alt="JBL SRX828S" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc; font-style: italic;">JBL SRX828S (Side fill Subwoofer)</div>
  </div>

</div>

- **Subwoofer for Drummer:** With the drums already being loud enough for the drummer to hear, the drummer needs the subwoofer to feel the kick and the bass physically. This is a low frequency monitor for drummers.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-37.png" alt="JBL SRX818S" style="max-width: 50%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">JBL SRX818S (Drummer Subwoofer)</div>
</div>

- When we have all these, why **IEMs**? In-Ear Monitors are monitors which can be worn by the performers in their ears. IEMs offer passive isolation of outside noises and gives a focused monitor output to the performers. The earpieces can be custom tailored for the performer's ear shape for better passive isolation. IEMs are also used for communication among the performers and the crew members (cueing) The reason why we have the stage monitors apart from IEMs is because

    * the number of IEMs can be limited

    * wireless IEMs are not 100% reliable as there could be RF signal drops

    * the performers may become uncomfortable on prolonged usage of IEM (or outright just not prefer IEMs at all). Stage monitors may act as a backup in those cases.

    * IEMs don't give the *feel* of the bass, it doesn't have a physical impact on the rest of the body unlike stage monitors. This is important especially in case of drummers

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-38.png" alt="IEM 2000 Series Receive (L) and Transmitter (R)" style="display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Sennheiser IEM 2000 Series Receiver (left) and Transmitter (right). User's choice of IEM earphones could be plugged into the receiver.</div>
</div>

- **Combiner antenna** is used to group multiple transmitters into a single antenna transmitter. This helps in eliminating the interference and cluttering caused by multiple transmitters in close proximity with each other. This also improves the performance of transimitting and the signal reliability.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-39.png" alt="Sennheiser AC 3200-II 8-signal Antenna Combiner" style="display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Sennheiser AC 3200-II 8-signal Antenna Combiner</div>
</div>

- **Shout Monitor:** This is a monitor for the FOH which is used solely for communication between the stage crew and the FOH. This outputs a mix of all talkbalk mics. There is no preferred product mentioned in the techrider but after some searching I think any good small speaker would do? Some people recommend compact PA systems like this 

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-2.png" alt="Mackie SRM150" style="max-height: 20vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Mackie SRM150</div>
</div>

Thinking of which, they requested 6 wedges at the start of the document but in the output routing only 4 are shown to be hooked up, maybe one of the wedges are being used as a shout monitor?

## Backline Requirements (Combined with Output and Input routing because i want to correlate the two)

### Drum

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-3.png" alt="Drum kit" style="max-width: 60%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Drum Kit</div>
</div>

These many many parts of a drum kit each make various sounds which make up the base of the track, the pulse, the beat. It also ranges from very low frequency (bass) to higher frequencies (crash cymbals) covering a vast range of the audible spectrum. O rings (mentioned as mandatory) help sustain the sound; reduce ringing and overtones, dampen, control, and make it sound more fuller or "fatter".

Due to its variety in producing sound, each part of the kit needs a separate microphone in order to have precision control over the mix. 

| **Input #** | **Instrument/Use**                     | **Mic/DI**                     | **Purpose**                          |
| ----------- | -------------------------------------- | ------------------------------ | ------------------------------------ |
| 01–02       | Kick drum (In + Out)                   | Beta 91A (boundary) + Beta 52A | 22" bass drum                        |
| 03–04       | Snare Top & Bottom                     | e904 / SM57                    | 14"x6.5" snare x2                    |
| 05          | Hi-Hat                                 | e914 / SM81                    | 14" hi-hats                          |
| 06–09       | Tom 1, Tom 2, Floor 1, Floor 2         | e904 / Beta 56A                | 10", 12", 14", 16" toms              |
| 10–11       | Overheads (L+R)                        | e914 / SM81                    | Full drum kit (especially the cymbals)              |
| 12          | Spare                                  | –                              | Backup input                         |
| 15          | Snare 2                                | SM57                           | Backup snare                         |

**Kick in/out?** In the sound of a kick, the sharp part (the "tck" click, or "attack") is recorded by the kick in mic (placed inside the kick drum), and the bass that follows is captured by the kick out mic (placed outside directed at the drum). This allows more fine tuning of the kick sound when layered together.

**Snare top/bottom?** Similar to kick in and out, mics facing the top (to record the attack, tone and the resonating sound) and bottom (to capture the following "crack" and wire "buzz") of the snare are placed. The phase of the bottom mic may need to be inverted as its facing the opposite direction of the top mic, else the sound may cancel out when layered together.

The thick carpet is required to isolate vibrations and prevent sliding of equipment due to the vibration.

### Lead Guitar

A guitar gives a track its melody with sounds in the midrange

A Direct Injection/Direct Input (DI) box takes the high impedance, unbalanced signal from the instrument (in this case the Guitar), and converts it into a balanced, low impedance signal that is free of interference and can be connected to the FOH.

The Mesa-Boogie Dual Rectifier and the JCM 900 are both amplifiers that connect the guitar to the cabinet. 

### Bass Guitar

Markbass Little Mark Tube 800 - Amplifier
Ampeg SVT - Cabinet and Bass Head (Amplifier)
Hartke HD 410 - Cabinet

### The rest of the inputs:

- **Pad** may refer to a Sampling Pad which contains pre-recorded audio elements like samples, loops, sound effects etc., which can be triggered by hitting the pads, each configured to play a specific sound on hit.

- **Track (L+R)** could be the input where any pre-recorded tracks like songs or backing tracks could be played.

- **Vocoder** is an effect processor that modifies the voice (modulator) input using chords or notes played on a synthesizer (carrier). It creates harmonized robotic voice effects.

- The many **talkback** channels are used in communication within the event crew. This communication will not be routed to the PA and hence cannot be heard by the audience.

- **Click** plays the click track through the performers' IEMs. Click track is a track that contains a metronome signal which ensures proper synchronisation and timing among the performers. 

- **Vox** stands for vocals, **Anchor** is for the stage anchors, and **Audience** is to record live audience noise and reactions.

#### About the microphones:

- The Shure Beta 91A has a half cardioid pickup polar pattern while the 52A has a supercardioid pickup. The 91A's frequency response range is 20Hz to 20kHz whereas the 52A only has 20Hz - 10kHz. Both of these microphones are tuned with frequency response curves suitable for kick drums

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-27.png" alt="Shure Beta 52A (Left) and 91A (Right)" style="max-width: 60%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Shure Beta 52A (Left) and 91A (Right)</div>
</div>

- Both the Shure SM57 and the Sennheiser e604 are dynamic microphones have a cardioid polar pattern. They have 40Hz-15000kHz and 40Hz-18000kHz response range respectively. Both are marketed towards recording percussion instruments (like drums), and Sennheiser explicitly mentions use with snares. The perference for snare bottom being Shure may be one gained through experience.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-28.png" alt="Shure SM57 (Left) and Sennheiser e904 (Right)" style="max-width: 60%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Shure SM57 (Left) and Sennheiser e904 (Right)</div>
</div>

- The Sennheiser e914 and Shure SM81 are both condenser microphones with 20Hz to 20kHz frequency range and have a cardioid polar pattern. Both have very similar response curves but the e914 is slightly elevated around the high end.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-29.png" alt="Shure SM81 (L) and Sennheiser e914 (R)" style="max-height: 30vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Shure SM81 (L) and Sennheiser e914 (R)</div>
</div>

- The Shure SM58 is another cardioid dynamic microphone. Its frequency response seems to be tuned for vocals, so it is a suitable and economic (according to a [reddit post](https://www.reddit.com/r/livesound/comments/uvbp35/other_than_the_sm58_and_sm57_what_mics_wired_or/)) choice for vox and talkback channels. It seems like there is a variant called SM58S that has an integrated on/off switch as well [mentioned as "SM58 (SWITCH)" in the techrider].

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-33.png" alt="Shure SM58" style="max-height: 30vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Shure SM58</div>
</div>

- Hohohoho the Sennheiser SKM 6000 sure does have all the bells and whistles (signal encryption on a mic??) It's a dynamic wireless microphone that has a capsule interface to change microphone heads, changing the mic's polar pattern, frequency response curve and sensitivity, takes power in the form of swappable lithium-ion battery packs and more. It seems to be a premium option

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-32.png" alt="Sennheiser SKM 6000" style="max-height: 30vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Sennheiser SKM 6000</div>
</div>

- There is also a Shure WBH53 mentioned, which is an omnidirectional condenser mic that can be worn on the head, possibly for hands-free segments and spoken parts

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-31.png" alt="Shure WBH53" style="max-height: 30vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Shure WBH53</div>
</div>

- The Sennheiser MKH 416 is a shotgun microphone that is highly directional and records sound only coming from the front.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-34.png" alt="Sennheiser MKH 416" style="max-width: 60%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Sennheiser MKH 416</div>
</div>

- **Hotshot?** Hotshot is a microphone switcher which can be used to reroute the output channel of the microphone connect to it (apparently with no pops as advertised on their website.) This allows the performer to switch between performing for the PA to communicating with the crew (talkback) seamlessly. It also provides 48V phantom power to the mic.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-30.png" alt="Hotshot 48V" style="max-width: 50%; height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Hotshot 48V</div>
</div>

We've already seen about all the outputs in the previous sections.

# Lighting Requirements

###### here is a picture gallery

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; justify-items: center; margin: 2rem 0; font-size: 0.8rem">
  
  <div style="width: 100%; max-width: 60%;">
    <img src="image-4.png" alt="Sharpy (not sharpie, thats a marker!)" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Sharpy (not sharpie, thats a marker!)</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-5.png" alt="Moving-Head Wash" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Moving-Head Wash</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-6.png" alt="LED PAR" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">LED PAR</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-7.png" alt="Warm PAR" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Warm PAR</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-8.png" alt="Profile Spotlight" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Profile Spotlight</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-9.png" alt="RGB Strobe Light" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">RGB Strobe Light</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-10.png" alt="4-way Molefay Blinder" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">4-way Molefay Blinder</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-11.png" alt="2-way Molefay Blinder" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">2-way Molefay Blinder</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-12.png" alt="Haze Machine" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Haze Machine</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-13.png" alt="Fog (Smoke) Machine" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Fog (Smoke) Machine</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-14.png" alt="RGB LED Batten" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">RGB LED Batten</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-15.png" alt="Follow Spot" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Follow Spot</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-16.png" alt="Avolite Arena" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Avolite Arena</div>
  </div>

  <div style="width: 100%; max-width: 60%;">
    <img src="image-17.png" alt="Avolite Tiger Touch II" style="width: 100%; border-radius: 0.65rem;">
    <div style="text-align: center; margin-top: 0.5rem; color: #ccc;">Avolite Tiger Touch II</div>
  </div>

</div>

![Antara Mitra Live 1](image-18.png)

![Antara Mitra Live 2](image-19.png)

**Console?** Well someone's gotta make those lights move, and that someone is the console.
It communicates with the lights over something called Digital Multiplex (DMX) which is a standard protocol. It sends digital control signals over a 5-pin XLR cable. This allows for synchronised and seamlessly moving lighting effects. 512 channels (each control parameter, like pan, tilt, color, intensity, etc., each make a channel) make up a DMX512 "universe". With a large scale event like this, more than one universe is required, and can be connected with each other over Ethernet. *a multiverse :D*

- **Claypaky Sharpy** is a high-intensity moving beam light which are used for mid-air effects

- **Moving Head Washes** are washes (soft light source that fill a place with light) which have pan and tilt control

- **PAR** means Parabolic Aluminium Reflector (or just Parabolic Reflector) and is used to reflect the light from the bulb/LED towards a specific direction. **Warm Par** is a Par with a white light that has a higher color temperature (how do you explain this in words?)

![White light with different temperatures](image-20.png)

- **Spots** (Spotlights) are lights with a sharp-edged beam that is used to light a key element on stage. **Profile Spots** have provision to attach "profiles" to the front of the lens, making it project specific shapes of beams. **Follow Spots** are manually operated spotlights used to track, and *follow* around performers on stage. 

- **Haze** is paired with lighting such as lasers to create spatial lighting effects like the one shown below. Though the haze itself is not that visible from distances, it stays airborne for a while, which is perfect for lighting effects. It uses oil-based fluids so care must be taken so that it does not deposit the oil on other equipments.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-21.png" alt="Lighting effects with Haze" style="max-height: 30vw; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Lighting effects with Haze</div>
</div>

- **Fog** (or Smoke) on the other hand, is made with vaporised/atomised water/glycol and used for quick smoke effects, as it stays airborne only for short durations.

- **Blinders** are used to... blind the audience for dramatic effect. Not in a damaging way, but in a tolerable and enjoyable way.

- **Strobes** are fast-flashing lights, also used for dramatic effect. **Battens** are long linear lights used for decoration like edge/outline lighting, or used for washing the wall with light (or really any creative way)

## Special Effects and Pyrotechnic Requirements

- **CO₂ Jets** are used to shoot out short, powerful bursts of white fog, used to emphasize drops, chorus, etc., This compressed CO₂ can also be used for the **Compressed Air Confetti Blowers** (the machines which spread confetti high in the air) and **Streamers** (which do the same thing but with ribbons)

- **Flamaniac**, **3/5 Finger Flames**, and **G Flames** all project fire in a straight line. **Sparkular** projects sparks, **Stage mines** explode into colorful sparks/flares on stage for visual and auditory effect, and **Stage Comets** launch streak-like fireworks upwards from the stage.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-22.png" alt="5-finger Flames" style="display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">5-finger Flames</div>
</div>

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-23.png" alt="Galaxis G-Flame" style="display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Galaxis G-Flame</div>
</div>

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-24.png" alt="Flame Fingers and Comets" style="display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Flame Fingers and Comets</div>
</div>

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-25.png" alt="Confetti and Ribbons" style="display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Confetti and Ribbons</div>
</div>

The Avolites Pearl / GrandMA Dot 2 console at the SFX desk controls all this, also via DMX.

## LED, Camera & Teleprompter

The Novastar 4K prime is an LED processor which takes source video signal (HDMI, DisplayPort, etc.,) from a laptop or a media server and drives the LED panels to display the signals. It is very useful in splitting the signal across multiple panels and synchronise them properly. The processor usually connects to the display over... ethernet!

In an LED screen, pitch means the distance between the centres of two LEDs on the panel. Smaller pitch = higher density of LEDs and higher quality as we get closer to the screen.

The Teleprompter is a screen for the vocalist to read lyrics and script for the program. For optimum visibility, it should be a big bright screen like a TV.

Camera input can be fed live into the displays for close-up views of the performers for the audience in the back.

<div style="text-align: center; max-width: 100%; margin: 1em 0;">
  <img src="image-26.png" alt="Novastar 4K Prime" style="max-width: 50% height: auto; display: block; margin: 0 auto;">
  <div style="margin-top: 0.5em; font-style: italic;">Novastar 4K Prime</div>
</div>

# Extending the techrider

Well I don't know much in the audio and lighting effects space so I will extend it with what I do know:

## Recording & Live Streaming

### Cameras

- Broadcast Cameras - 5 nos. (Blackmagic Studio Camera 4K Pro / Sony FX-7 / FX 6 / FS 7)
- Wireless Video Transmitters at each camera (Hollyland Cosmo C2 Preferred)
- 1x 16ft Camera Dolly
- 1x 18ft Video Jib with Remote PTZ Head + Operator

### Networking & Streaming

- Stable internet connection (via Ethernet or Fiber) with minimum 20 Mbps uplink (If not available, LiveU or Peplink)
- 1x Stream Encoding Computer (Hardware Accelerated) + Stream Operator

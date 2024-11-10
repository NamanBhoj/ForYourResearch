## Introduction

Display devices have become ubiquitous in our daily lives; their applications range from smartwatches, smart- phones, pads, computer monitors, TVs, data projectors, to augmented reality (AR) and virtual reality (VR) headsets, just to name a few. After several decades of extensive research and development in materials and devices, and heavy investment in manufacturing technologies, liquid crystal displays (LCDs)1–3 and organic light-emitting diode (OLED)4–6 displays have become the dominant technologies. Recently, micro-LEDs7 and mini-LEDs8 are emerging; the former can offer an extremely high lumi- nance while the latter can serve either as a locally dim- mable backlight for high-dynamic-range (HDR)9 LCDs or as an emissive display itself. Micro-LEDs offer an



Correspondence: Shin-Tson Wu (swu@creol.ucf.edu)

1College of Optics and Photonics, University of Central Florida, Orlando, FL 32816, USA

ultrahigh luminance, long lifetime, and high pixel density, and are particularly attractive for the see-through AR displays10, especially when the ambient light is strong. Nevertheless, the biggest challenge for micro-LED to overcome is the mass transfer yield and defect repair11, which in turn affects the cost.

AR and VR have potential to revolutionize the ways we perceive and interact with digital information as promis- ing next-generation displays. Since the 1990s, AR and VR experienced their ﬁrst boom ushering in the dawn of evolution in display and information platforms12. Over the past decades, emerging technologies such as advanced liquid crystal (LC) materials and functional devices13–17 have greatly reshaped the AR/VR display systems, enabling this advanced information technology to be truly integrated into people’s lives. These new display platforms are mutually reinforcing with LC optics, resulting in many impressive, AR/VR-ready devices.





© The Author(s) 2022

Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons license, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons license, unless indicated otherwise in a credit line to the material. If

material is not included in the article’s Creative Commons license and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.









In this paper, we focus on advanced LC-based light engines and optical components for AR/VR applications. First, we review the basic structures of AR/VR displays and the key parameters with associated criteria. Then, we dive into three main categories of LC functional devices: HDR microdisplay for VR, high-resolution-density, high- brightness LCoS for AR/VR light engines, and nearly 100% light efﬁciency planar LC optics. On the microdis- play part, we discuss how an efﬁcient, high brightness light engine improves the VR imaging system. For the LCoS panels, we ﬁrstly review the working principles and present the status of both amplitude and phase mod- ulators, and then introduce various unique applications adopted for near-eye displays. For LC planar optics, the working principles, and promising solutions to the pressing challenges of AR/VR displays are discussed. These three LC functional devices cover the entire AR/VR systems from light engines, imaging optics, to various functional elements.






---

## AR and VR display systems

More recently, the next-generation display technologies under dedicated development are no longer limited to flat panels that are just placed in front of the audiences but aimed at revolutionizing the way of interactions between the users and their surrounding environment. At one end of the spectrum is VR display, which effectively extends the ﬁeld of view (FoV), blocks the entire ambient, and offers a completely immersive virtual environment. At the other end of the spectrum is AR display, which pursues a high-quality see-through performance to enrich the real world by overlaying digital contents12. With the refreshing visual experiences, AR/VR displays have demonstrated the promising potential for a wide range of attractive applications, including but not limited to healthcare,

education, engineering, manufacturing, and entertain- ment18–20.

For VR systems, the emitting light from the display module, which is usually 2–3 inches in diagonal, generates a virtual image with an adequate FoV via the well- designed magniﬁcation lens (normally 2 inches aperture size with 35–45 mm focal length). Figure 1a depicts the schematic diagram of a VR optical system. The eyebox deﬁnes the region within which the whole image FoV can be viewed without vignetting, and its size is usually cor- related with FoV due to the basic Etendue conservation. Since VR provides an immersive experience with virtual images, the 3D virtual object with depth cue is an important feature. Displaying two different images to the left eye and right eye can form the vergence cue. But the ﬁxed image plane often mismatches with the actual depth of the intended 3D image, leading to vergence- accommodation conflict (VAC)21,22, which will be dis- cussed in detail later. Perceived image resolution for VR





displays can be assessed from the angular resolution and calculated by dividing the total resolution of the display panel with the FoV. To achieve human visual acuity of 1 arcminute angular resolution23, 60 pixels per degree (ppd) is considered a common goal. Regarding AR systems, the emitting light from the microdisplay module (usually < 1 inch) generates virtual content, which overlaps with the real world. Figure 1b depicts the generic sketch of an optical see-through AR system with an optical combiner. Throughout various optical architectures from free-space combiners20,24, total internal reflection (TIR) freeform combiners25,26, to waveguides with diffractive or reflective combiners12, the deﬁnition of the above parameters remains the same. But the VAC issue is more essential in AR than VR, as the image in an AR display is directly superimposed onto the real world with correct depth cues. Compared to VR with a 2–3-inch display panel, the light engine in AR is much smaller, which leads to the conflict between FoV and eyebox size, especially for a glasses-like AR system. To meet above requirements, advanced LC devices with unique optical properties and optoelectronic responses have been widely used in AR/VR displays, covering all key components from light engines to optical components.


---

## LCDs for VR

An LCD consists of two main parts: backlight unit and LC panel. The backlight unit provides a uniform illumination on the LC panel, and the transmittance of each pixel is controlled by a thin-ﬁlm-transistor (TFT). In the past ﬁve decades, both backlight unit and LC panel have witnessed tremendous growth and signiﬁcant improvement2,27–33.











Recently, mini-LED backlight units with sufﬁcient local dimming zones have successfully suppressed the halo effect and achieved a contrast ratio of >105:19,34,35. Today, TFT LCDs remain the dominant flat panel display technology, especially in TVs, tablets, and monitors, despite the strong competitions from OLED displays. The working principles and applications of LCDs as direct-view displays have been discussed in several review papers3,8 and will not be repeated here.

However, in a VR system, due to the emergence of many new requirements, there are some problems to directly use a traditional LCD as the light engine. To clarify these issues, in the following we will highlight the key differ- ences between the display devices for direct-view systems and VR systems and present the challenges and potential solutions. Before diving into the details, we will briefly introduce active-matrix OLED display, which is also a strong contender for VR light engines. Compared to LCDs, the self-emissive OLED displays show an unpre- cedented contrast ratio, high efﬁciency, and fast-response time. However, the resolution density of OLED displays is not sufﬁcient to eliminate the screen-door effect. Such a resolution limitation results from two parts: For the front plane, the traditional ﬁne metal mesh (FMM) fabrication method can typically support organic material patterning of about 600–800 pixels per inch (PPI)36. For the back- plane, it is necessary to squeeze the complex compensa- tion circuit (typically, eight thin-ﬁlm transistors (TFTs) and 1 capacitor) into each small subpixel (<8 µm: 3000 PPI). To overcome the above-mentioned PPI issue, the OLED-on-silicon has attracted lots of attention37–39. The CMOS (complementary metal-oxide semiconductor) with high electron mobility signiﬁcantly reduces the cir- cuit size. Moreover, new technologies such as laser pat- terned FMM40, silicon nitride mask41, photolithography method42, and electro-hydrodynamic printing43 are also emerging to help achieve high-resolution density. The other method for OLED-on-silicon to fulﬁll high- resolution density is to use white-OLED (WOLED) with color ﬁlters. However, color crosstalk, high driving vol- tage, and low optical efﬁciency are the key drawbacks. To address these problems, WOLEDs with microlens arrays44 and tandem structures45 have been proposed. Moreover, the high cost of silicon wafer normally restricts the display panel size to be about one inch. According to the Etendue conservation in the VR system, such a small size display panel further limits the FoV to be below 100°. Therefore, the competition between OLEDs and LCDs has extended from traditional direct-view displays to AR/VR headsets. In this review, we will focus on LCDs.

In a VR headset, an enlarged virtual image is formed in front of the user through a magnifying lens, resulting in an immersive experience. Such a projection process demands the display panel to have a much higher resolution density

than that of a direct-view display. The visual acuity of the human vision system is 1 arcmin46, then a 6 K resolution display is typically required to support a 100° FoV VR headset47. To achieve a compact form factor, such a 6 K × 6 K resolution needs to be assembled on a 2–3-inch panel, resulting in a 2000 PPI of the microdisplay panel. More- over, the motion blur becomes more severe and obvious for a near-eye system with fast eye moving18, especially during a video game48. Another major difference between traditional direct-view display and VR headset is the viewing condition. For a VR headset, the housing blocks the surrounding illumination, which signiﬁcantly reduces the ambient light effect. Based on the dark adaptation of human visual system, a display with about 200–300 nits is bright enough49. In contrast, a TV usually requires 1000 nits. Additionally, the head-mounted devices require a compact form factor and lightweight for comfortable wearing. Recently, the folded optical path based on polarization selectivity has been widely applied in VR systems to reduce the volume size50,51. This thin and light design by using folded optical path is also known as pancake optics. In such a pancake system (Fig. 2), due to the light loss caused by the multiple partial reflections, the optical efﬁciency is reduced about four times50. To achieve the same brightness (200–300 nits) as a normal VR display, the required brightness from the display module should be boosted by four times20, which is around 800–1200 nits. Fortunately, the ﬁxed viewing position in a VR system provides an opportunity to















Table 1 Total light transmission (TLT) calculation of an LC panel for VR headsets



aDepending on the LC operation mode and cell gap design employed

b1500-PPI condition





achieve higher efﬁciency by concentrating the emitted light into the eyebox area52.

Based on the above-mentioned requirements, there are several challenges when using LCDs as light engines in VR headsets. The ﬁrst challenge is the reduced aperture ratio resulting from high-resolution density53. LCD panels with 100 PPI (TVs), 300 PPI (laptops), 600 PPI (smartphones), and 1500 PPI (VR light engine) have aperture ratios of 95%, 86%, 73–38%, respectively. The smaller aperture ratio reduces the optical efﬁciency, which in turns increases the power consumption and thermal effect of the VR headset. To mitigate the motion artifacts in VR headsets, display with high frame rate (≥120 Hz) and low duty ratio (≤20%) are preferred54,55. Therefore, the LC response time should be fast enough to support the high frame rate and low duty ratio56–62. To achieve a response time faster than 3 ms, the standing layer approach (also known as dead zones) has been demonstrated. The exis- tence of dead zones helps shorten the response time, but the tradeoff is decreased transmittance61.

Overall, to achieve high-resolution density and fast- response time, LCDs for VR headsets suffer from low transmittance caused by small aperture ratios and dis- clination lines. If we further consider the absorption losses from color ﬁlters and polarizers, the total light transmit- tance of the LC panel for VR headsets is merely about 2%. Details are listed in Table 1. Therefore, how to enhance the optical efﬁciency of VR display panels is critically important.


---

## Efficiency enhancement in VR

In this section, we will discuss how to improve LCD’s optical efﬁciency for VR headsets. The total optical efﬁ- ciency of a VR system consists of two main components: one is the panel efﬁciency, and another is the imaging optics. The panel efﬁciency has been clearly discussed above (Table 1), here we will focus on improving the optical system efﬁciency using a directional LCD backlight. For a typical Lambertian display, only a small portion of the light can be received by the viewing eyebox63 (Fig. 3a, green and yellow cones), and the rest is wasted64. The system consists of an LCD, a Fresnel lens with focal length ~35 mm, and a circular receiver with a diameter of 4 mm (pupil size). The eye relief is about 15 mm, and the panel is placed on the back focal point of the Fresnel lens. The relationship between the emission angle (y-axis) and the light efﬁciency

is plotted in Fig. 3b, which indicates that only a small portion of the emitted light can be received by the viewer’s eye. Therefore, a directional backlight is preferred to boost the optical efﬁciency of VR systems. Due to the limited volume size in a VR system, many thin and compact designs for directional backlight have been achieved by applying nanometer-sized grating, microlens arrays, micro- pyramid ﬁlms, or reflective microstructures65–70.

The implementation of directional backlighting can signiﬁcantly improve the overall optical efﬁciency but will also cause severe vignetting effects. As illustrated in the green cone of Fig. 3a, the chief ray of the emission cones is mismatched with the receiving angle of the eyebox. Figure 3b shows the optical efﬁciency at different pixel positions (x-axis). Only when the chief ray of the emission angle matches the receiving angle, maximum efﬁciency can be reached63. Therefore, to spatially control the direction of the emission angle is crucial to avoid vignetting while maintaining a high efﬁciency. To address this issue, functional optical ﬁlms can be added to spatially match the radiation pattern of the display panel to the receiving cone of the VR optical system. Furthermore, Peng et al.71 found that the spatial radiation-pattern modulator can mitigate the ghost image in an VR system. Using a directional backlight, when the pixel position is far away from the center, the ratio of ghost to signal energy increases. The spatial radiation-pattern modulator can modulate the local radiation of each pixel and avoid receiving the ghost image. As a result, the ratio of ghost to signal energy decreases.

Aside from optical efﬁciency improvement, adding functional ﬁlms with intensity modulation can help to enhance the VR image quality. Generally, an LCD’s con- trast ratio ranges from 2500:1 (FFS mode) to 5000:1 (MVA mode). Such a grayish dark state severely degrades the user’s immersive experience. Recently, spatial intensity modulation is realized by the zoned mini-LED backlight. Depending on the displayed image, such a locally dim- mable backlight can boost the LEDs in bright image areas and dim them in dark areas72. The mini-LED backlight technology is applied in the VR light engine to display HDR images and provide a better immersive experience. Figure 3c shows the image quality comparison of images with and without local dimming functions (2.16 inch LCD module with the 1411 PPI and 2304 dimming zones)53. Wu et al.73



























packed thousands of mini-LEDs into a 2.6-inch backlight, and the brightness of each LED is modulated according to the image content. However, a notorious visual artifact, called halo effect, in the mini-LED backlit LCDs could occur, depending on the zone number, native LC contrast ratio, image content, ambient light, and viewing angle9,35,74. From the perspective of backlight unit, to mitigate the halo effect, it is required that the light distribution of each local dimming zone is uniform, and the light crosstalk between adjacent zones is minimized. Huang et al. described the desired light proﬁle by a super-Gaussian function and discovered that good light conﬁnement (power of super- Gaussian function about 4.5) helps to improve image quality. To achieve such a desired light proﬁle, two approaches are often considered. One is to optimize the LED chip geometry, mount a scattering lightguide on top of the LED array, and fabricate reflective sidewalls and microstructures on the outer surface of the LED. Another approach is to laminate optical ﬁlms in the backlight unit to shape the light proﬁle before it enters the LC panel. Based on these two methods, novel mini-LED backlight systems supporting spatial light intensity modulation are

proposed to prevent the light crosstalk and to maintain the luminance and color uniformity of the zones34,75–79. On the software side, Seetzen et al.80 proposed a local dimming algorithm (called maximum method algorithm80) to sys- tematically optimize the LCD transmittance and spatial proﬁle of mini-LED backlight. The brightness of the mini- LEDs in each zone is determined by the brightest pixel in the zone. Although a sufﬁcient brightness can be main- tained, the drastic brightness change per frame may cause severe flickering and image artifacts. The averaging algo- rithm, on the other hand, suppresses the peak brightness of each area to avoid such image artifacts, but the highlighted images may become dimmer and less vivid. In order to solve this dilemma, extensive works81–83 on novel local dimming algorithms to improve the image quality of mini- LED backlit LCDs have been proposed.


---

## Driving methods and power consumption of mini-LED backlit LCD

Previous sections have fully discussed the optical efﬁ- ciency, in this section, we will briefly analyze the electrical efﬁciency to provide a comprehensive and systematic































discussion. Due to the limited battery storage, an effective driving system is essential to lower the power consump- tion and the associated thermal effect of a compact VR headset. To drive the mini-LED backlight, both active matrix (AM) and passive matrix (PM) driving methods have been explored53,73,84,85. The AM driving method integrates the mini-LEDs with the TFT backplane to control the luminance of each zone and reduce the required number of IC chips84. For an AM mini-LED backlight, because the desired driving voltage is stored on the capacitor, the driving current can be kept constant for a long period. Therefore, the driving current is low while achieving the required luminance86,87. In addition, the TFT also consumes power as the driving current passing through. On the contrary, the PM driving method, which directly integrates the LCD panel with the mini-LEDs through printed circuit board (PCB), is a simpler way to drive the mini-LEDs88. The PM method drives the back- light row-by-row, and due to the lack of storage capability, the mini-LEDs in each row are only driven for a short time89. Therefore, to attain the same luminance as the AM driving, the PM method requires a higher current for the mini-LEDs.

To compare the power consumption between the AM and the PM driving methods, a mini-LED backlight with 48 × 48 mini-LEDs for VR displays is studied. Herein, the duty ratio of the AM and PM driving methods is set at 8.33% and 2.08%, respectively. Generally, the resistance of the parasitic resistor on the power line for AM driving is several ohms, so the resistance of 1 Ω, 5 Ω, and 10 Ω are selected for the evaluation. Figure 4a shows the simulated power consumption of AM and PM driving methods with different resistance. Overall, the PM driving consumes more power than the AM method except at low resistance (1 Ω) and luminance ≤ 600 nits. The higher power con- sumption originates from the larger driving current

because of the shorter emission period in the PM driving method. As shown in Fig. 4b, for the PM driving method, most of the power is consumed when the large driving current passes through parasitic resistor (P = I× R2). Recently, to overcome the impact from short emission period, the multiple scanning scheme, which drives mul- tiple rows at one time, is used in the PM driving method to increase the duty ratio90. In this work, the total rows are divided into 12 groups and the mini-LEDs of each group are driven at the same time, extending the duty ratio from 2.08% to 8.33% to reduce the required driving currents. The power consumption difference between the AM and the PM driving methods with the multiple scanning scheme are plotted in Fig. 4c. Notably, to compensate for the optical loss in the pancake conﬁg- uration where the maximum transmittance drops by about four times, the display luminance should be boosted from 300 nits to 1200 nits. Within the maximum lumi- nance of 1200 nits, the PM driving method with the multiple scanning scheme offers a lower power con- sumption than the AM driving method. This conﬁrms that extending the duty ratio to reduce the driving current of mini-LEDs by the multiple scanning scheme sig- niﬁcantly lowers the power consumption. However, more ICs are required to individually control the mini-LED in each zone, which in turn increases the cost.


---

## LCoS devices for AR/VR

In contrast to conventional transmissive TFT-LCDs, the reflective LCoS panel combines the electro-optic effect of LCs and high-performance silicon CMOS electronics to offer a high ﬁll factor (>90%), high resolution, compact form factor, and high frame rate14. Due to the excellent light modulation ability, both amplitude and phase-only LCoS devices are important light engines for AR/VR applications91,92. Especially, compared to other phase











modulators, such as microelectromechanical system (MEMS)93,94, the phase-only LCoS devices (also called spatial light modulators (SLMs)) stand out in multilevel phase modulation, low driving voltage, and comparably low cost95. As a result, most holographic displays for AR/ VR applications are implemented with SLMs. In this section, we will ﬁrst briefly describe the working princi- ples of LCoS devices, then stress some remaining tech- nical challenges with recent progress, and ﬁnally present their various applications in AR/VR systems.

A typical reflective LCoS device consists of a CMOS silicon backplane, pixelated aluminum reflectors, LC layer, and an indium tin oxide (ITO)-coated cover glass. The aluminum electrodes deposited onto the silicon backplane act as reflective pixel arrays. The LC layer is sandwiched between the ITO-glass substrate and the CMOS silicon backplane. When an incident light traverses the LC layer, the voltage-dependent phase retardation (for an amplitude modulator) or phase change (for a phase modulator) can be obtained96–98. For an amplitude modulating LCoS device in a projection system, the LED source emits an unpolarized light. Let us assume the s-polarized light (s-wave) is reflected, while the p-polarized light (p-wave) transmits through the polarizing beam splitter (PBS). The modulated p-wave from LCoS is reflected by the PBS onto the pro- jection optics of the near-eye system. When a phase-only LCoS is used as an SLM with a coherent light source99, by spatially controlling the wavefront, the SLM can be applied in near-eye displays with holographic imaging, which will be discussed in detail later. It should be noted that the beam splitter can be replaced by other holographic optical elements (HOEs) in an off-axis conﬁguration92 or wave- guide geometry100, leading to a more compact form factor. For the LCoS based near-eye systems, the two main requirements are wide FoV and high resolution. These two factors are interrelated. In an unmagniﬁed near-eye system, the FoV is equal to twice the maximum diffraction angle, and the eyebox is equal to the size of the employed SLM. At normal incidence, the maximum diffraction angle in a binary grating is sin−1 [λ/(2po)], where po is the pixel pitch of the LCoS SLM, and λ is the incident wavelength. Figure 5a shows the relationship between FoV and pixel pitch at λ = 633 nm of the SLM. If the pixel pitch is reduced to 1 µm, the FoV can be widened to ~37°. The tradeoff between FoV and one-dimensional eyebox is governed by sin(FoV/2)·eyebox = λN/2, where N is the 1D number of pixels101. As shown in Fig. 5b, FoV can be increased for a given number of pixels at the expense of reduced eyebox size. By employing an SLM with a smaller pixel pitch and more pixels, a wider FoV can be achieved while maintaining the same eyebox size. Based on the above analysis and the requirements of AR/VR, an ultra- high resolution of 25,400 PPI corresponding to a pixel

pitch of 1 µm is critically needed.





















To achieve an ultrahigh-resolution LCoS panel, the main challenges are the CMOS backplane and the fring- ing ﬁeld effect (FFE). New LCoS foundries supporting a smaller feature size need to be developed to accommodate enough transistors in an ultrasmall pixel. Because of the limited voltage swing the CMOS backplane can support, the LC materials with a larger dielectric anisotropy are desired to reduce the required driving voltage. The layout optimization also helps achieve a smaller pixel size102. For the second challenge, the fringing ﬁeld effect is caused by the unequal voltages on adjacent pixels. As the pixel pitch gets comparable or even smaller than the cell gap, the FFE will become much stronger, which deteriorates the LCoS performance. Currently, the state-of-the-art pixel pitch is

~3 µm for both amplitude and phase LCoS devices103. For an amplitude LCoS, a straightforward method to mitigate the FFE is to reduce the cell gap by employing a high Δn LC material104,105. Besides, several other strategies have been proposed to suppress the FFE, such as optimizing the slope of pixel electrodes106, adopting circularly polarized light107, fabricating double-side electrode structures108, and introducing patterned pretilt angles109. For an SLM panel, the phase disturbance caused by the FFE could lower the diffraction efﬁciency and exacerbate the reconstruction error. Compared to amplitude LCoS devices, it is more challenging to mitigate the FFE of phase-only LCoS devices because of their thicker cell gap and more stringent requirements such as linearly polar- ized light and sharp phase edge. To achieve 1-µm-pitch phase modulators, Isomae et al.110,111 proposed a dielec- tric shield wall structure, but the device fabrication is challenging. Besides the material-based and device-based methods, model-based112 or algorithm-based methods113 have also been introduced to compensate the pixel crosstalk. Nevertheless, rigorous simulations on the LC dynamics are necessary when the pixel pitch becomes comparable or even smaller than the cell gap. Persson et al.114 proposed a modiﬁed algorithm to include the FFE in the hologram optimization, but the real-time operation is a main concern. Despite decades of extensive efforts,











the ultrahigh-resolution phase modulators for wide FoV holographic displays are still awaiting to be developed.


---

## Amplitude LCoS in AR

For AR displays, several types of light engines have been developed as the image source to provide the virtual images, such as LCoS, digital light processor (DLP), OLED micro- display (μOLED), micro-LED, and laser beam scanner (LBS)12,115. LCoS can provide high brightness (>50 K nits) and has come to fabrication maturity after more than 20 years of development. Companies like Sony, Himax Dis- plays, Compound Photonics, etc., are devoted to developing LCoS based light engines with high resolution for AR applications and the total volume is only about 1 cm3 including the illumination optics15,116. As shown in Fig. 6, an amplitude LCoS has been integrated into several types of AR systems. For example, Google Glass adopts a traditional PBS as optical combiner and utilizes a Field Sequential Color (FSC) LCoS with resolution of 640 × 360 as its light engine. The combiner designs used in Google Glass are often referred to as birdbath optics (Fig. 6a). Another simpler design using a single partially reflective off-axis freeform mirror as the combiner can be seen in later products such as Meta 2117, achieving a large FoV (up to 90°) with the cost of form factor (Fig. 6b). Another way to fold the optical path is to use a TIR-prism (Fig. 6c). In this design, all the surfaces

are freeform, which offers an excellent image quality25. To cancel the optical power for the transmitted environmental light, a compensator is added to the TIR prism. The whole system has a well-balanced performance between FoV, eye- box, and size. To further reduce the form factor, the prism/ half mirror can be replaced by thinner and angular-sensitive HOEs (Fig. 6d) and achieve a glasses-like form factor118,119. However, these HOEs show a strong wavelength depen- dence thereby suffering severe dispersion issues. In the early days, amplitude LCoS are widely used in data projectors, where real images are projected to a scattering screen for audiences to see with a large viewing angle. With the aid of see-through in AR displays, Lee et al.120 proposed a pro- jection system based on diffusive HOEs, where most ambi- ent lights pass through the diffusers due to the narrow angular selectivity of the HOEs. One common conﬁguration for generating such images is to modulate a collimated beam with an amplitude LCoS. Another conﬁguration for using LCoS as a display panel is to add pinholes to a 4-f system, where a collimated light source is no longer required121.

Currently, most AR products adopt waveguide design with diffractive (Fig. 6e) or reflective (Fig. 6f) combiners due to the attractive thin form factor. Among them, HoloLens 1 and Magic Leap 1 and 2 adopt LCoS as light engines122,123. A newly developed AR prototype, Lumus Maximus124 combines a 2 K × 2 K LCoS with its partial

















reflective surfaces waveguide, achieving a 50° FoV and showing an impressive image quality. It is worth men- tioning that LCoS itself is a reflective display operating with a polarized light, while most light sources are unpolarized, including traditional lamps and energy- efﬁcient LEDs. To improve the light efﬁciency, a polar- ization converter can be integrated into the amplitude LCoS thereby increasing the light efﬁciency125–129.


---

## SLMs for AR/VR

A high-resolution LCoS SLM can directly control the properties of the illumination wavefront, allowing to support holographic view130, which is also referred to as computer-generated holography (CGH)101. The generated holographic image exhibits the natural focus-and-blur effect like a real 3D object. Such an SLM is particularly useful for AR/VR displays to provide the 3D scenes with correct depth cues. Maimone et al.92 demonstrated a high-quality imagery with a compact holographic view for VR and AR displays using a SLM. Based on Fresnel holographic principles, the system can integrate most of the imaging complexity into a SLM, enabling precise and spatially variant control of image focus. This control is the core for generating holograms. Figure 7a1 and a2 show the system conﬁgurations for AR and VR, respectively. Here the pitch size is 8 μm, and the active area is 15.36 ×

8.64 mm2. Figure 7a3 shows an image quality comparison

between the target and the photograph of the prototype VR display. It is encouraging to achieve holograms with SLM for near-eye displays. However, the hologram ren- dering requires complicated computation and is time- consuming. Another concern for further using an SLM in near-eye displays is the limited Etendue. Presently, the smallest pixel size of an SLM is ~3 µm (usually 3–12 µm), therefore the diffraction angle is generally <5° under plane-wave illumination. A typical SLM panel size is only 0.5–1 inch, as a result, the tradeoff between eyebox size and FoV needs to be balanced.

To use a LCoS SLM for AR/VR displays with an expanded Etendue, one strategy is to increase its diffrac- tion angle by relay optics or applying spherical-wave illumination131–133. Chen and Chu131 demonstrated a 4-f relay system to demagnify the SLM. The imaged pixel size becomes smaller via the 4-f system, leading to a larger diffraction angle at the cost of a smaller display panel. Then Chen et al.132 used a spherical wavefront to illu- minate the SLM, increasing the diffraction angle and thereby the FoV. Meanwhile, Shi et al.133 also demon- strated a near-eye holographic system with spherical waves for a wider FoV. Aside from above solutions, Kuo et al.134 developed a scattering-based Etendue expansion method, in which the outgoing coherent beam from the SLM is scattered by a static mask with randomized scat- tering properties. The wavefront coming from the SLM









  	













can be scattered by the mask to a larger range of angles, thus increasing the Etendue. As a result, the FoV can be extended without decreasing the eyebox size. By applying this approach, the FoV was experimentally expanded by four times in both horizontal and vertical directions. It is worth noting that the scattering masks are randomly patterned, leading to the inevitable noise of these ran- domly scattered lights, which will cause low ﬁdelity pro- blems when extending the system Etendue.

Recently, based on the scattering mask concept, Baek et al.135 proposed a neural Etendue expander with wide- angle and high ﬁdelity for near-eye systems. Here, the generation of neural Etendue expander and the state of SLM were jointly trained via neural network across a natural image dataset. As a result, the trained Etendue expander possesses the beneﬁts of scattering elements for enlarging FoV, while improving the signal-to-noise ratio (SNR). In the simulation, this approach can increase the Etendue by sixty-four times, which means a wide FoV and a large eyebox can be achieved simultaneously.

Due to the relatively high cost and limited panel size with today’s hardware, using an SLM as the light engine for AR/ VR displays is not yet practical. However, SLMs can be used as an extra booster to combine with traditional display penal, such as LCD, for near-eye displays to overcome the VAC issue. Due to its phase modulation ability, an SLM can be placed in the light path as a spatially controllable lens. Cui and Gao136 demonstrated a multifocal system by dividing a display panel into four subpanels and optically mapping them to different depths with an SLM located at the Fourier plane of the 4-f system (Fig. 7b). Here the SLM presents a static phase proﬁle, including the quadratic phases that image the subpanels to different depths. Meanwhile, Matsuda et al.137 also designed and demon- strated a full-color focal surface display to address the accommodation issue for near-eye displays. In this design, the SLM works as a programmable lens with spatially varying focal length, which can optically map the pixels at different spatial locations to different depths. As shown in Fig. 7c1, the focal surface display has a more compact form factor than the design reported by Cui and Gao due to the absence of the 4-f system. Moreover, the focal surface display can support arbitrary depth maps compared to conventional multifocal displays thereby displaying more accurate depth and blur (Fig. 7c2). Here, the burden to generate correct depth is placed on the computation, which makes real-time global optimization of phase patterns on SLM very challenging. The good news is that with the advancement of algorithms and convolutional neural networks (CNNs)138,139, solving this problem is just around the corner. Recently, Shi et al.139 demonstrated a real-time CGH synthesis pipeline with a high image quality, achieving a 60-Hz frame rate through a desktop computing unit.


---

## LC planar optics

In addition to modulating the image as a display or SLM, LCs exhibit some other attractive features, such as polymerization and photo-patternable character- istics140,141. These properties can be used to create new photonic devices, called LC planar optics or LC optical elements (LCOEs)142–144, which exhibit a ultrathin form factor, nearly 100% efﬁciency, strong polarization selec- tivity, and switching ability. These LCOEs show promising applications in AR/VR systems. different form light engine. In this section, we will discuss the LCOEs from transmissive and reflective aspects, respectively.


---

## Transmissive LC planar optics

In the transmissive LCOEs, we will focus on the geo- metric phase optical elements, whose phase retardation depends on the LC alignment. This is the main reason that the transmissive type optical element can achieve sharp phase modulation within a thin layer. Being a dif- fractive optical element, this type of device is working in the Raman-Nath regime, which is regarded as the “thin” optical element (e.g., surface relief grating), and its dif- fraction efﬁciency can be maximized at an optimal thickness. Such a transmissive LCOE will show strong polarization selectivity and can work as a waveplate, grating, and lens, respectively, depending on the LC alignments. The polarization responses of each element are summarized in Fig. 8. In the following, we will discuss each device in detail including its working principles and promising applications in AR/VR displays.

Being an anisotropic optical material, LC can introduce phase retardation for a polarized light145, thereby it is a promising candidate for waveplates (or phase retarders). Both passive (LC polymer) and active (LC cell) waveplates can be fabricated146,147. The passive LC waveplate is a polymer ﬁlm after UV stabilized process, which is ultra- thin and light. The active LC waveplate is switchable between on- and off- states by applying a voltage. The schematic of a simple LC half-waveplate (HWP) is depicted in Fig. 8a. Lu et al.148 proposed a method to achieve multiplane near-eye display by using active LC waveplates, as shown in Fig. 9a. In the system, the LC- based active HWP works together with a passive LC lens. Since the LC lens is polarization dependent, switching the active HWP will rotate the polarization state, which in turn changes the optical power. If the passive LC lens is replaced by a polarization selective grating, then the focal plane modulation will turn to output beam angle shifting for beam steering, as Fig. 9b shows149. This compact beam steering has potential for pupil steering150 and foveated imaging151 in AR/VR systems. To have a broadband active waveplate, the simplest device is a TN cell. Moreover, we can fabricate a broadband active waveplate by using a negative-dispersion LC material to compensate for the





















wavelength dependent phase retardation in the visible range. Merck has developed such a negative-dispersion LC monomer (e.g., RMM 1705) for passive LC waveplates.

structure152. According to the requirements of active driving, each twisted layer needs two ITO-glass sub- strates, which increases the thickness and weight of the system substantially.

An LC grating can be obtained by introducing a linearly varying phase proﬁle to the LC waveplate. Several meth- ods have been developed for generating LC grating pat- terns: one is to create a periodic electric ﬁeld by making periodic electrodes153–155 or periodically mod- ulating the electric ﬁeld distribution156, and another is to provide volume/bulk/surface alignment to the LC mole- cules157–164. Currently, the most widely employed method is surface alignment with interference exposure, which can achieve a smaller grating period and smooth phase change. This method is also suitable for low-cost mass production. In the interference exposure, the grating pattern can be described as:

 1 e—ik0x sin θ +  1 eik0x sin θ = 2 cos(k0x sin θ) 



However, for multiplexing and steering applications in the	i	i

AR/VR systems with an active LC waveplate, the response

time needs to be fast (~1 ms). At present, no negative-

sin(k0x sin θ)



(1)



dispersion LC with such a fast-response time has been reported yet. Another approach is to build multi-twist

from Eq. (1), the grating pattern is sinusoidal linear polarization whose diffraction efﬁciency at normal















incidence is:



η0 = cos





2 πΔnd 













1 n S'

2





2 πΔnd 















(2)

structures to achieve broadband and wide-view performance.

For VR applications, Lee et al.171 used an active PB grating to enhance resolution by modulating the imaging position with time multiplexing. As a result, the original



where S' = S3/S0 is the normalized Stokes parameter of the incident light. Due to linear phase change of the

grating pattern, only the 0th and ±1st orders have nonzero solution, when the grating transfer matrix has the Fourier transform for the far ﬁeld diffraction165. In other words, according to Eq. (2), when the grating thickness satisﬁes the half-wave condition, all the diffracted light will contribute to the ±1st orders. Furthermore, if the incident light is circularly polarized, the diffraction efﬁciency can reach 100% in theory. Under this condition, the light propagation process can be expressed by Jones matrix:

pixel grid and the shifted pixel grid appear alternatively by frames, thereby the apparent pixel density is doubled (Fig. 10a). Zhan et al.172 also applied a passive PB grating to realize similar pixel shifting by polarization multi- plexing rather than time multiplexing. To precisely con- trol the polarization state, a pixelated polarization rotator is added to align with the original display panel. For AR applications, Yoo et al.173 proposed a waveguide AR sys- tem with an extended FoV by using such a PB grating. As depicted in Fig. 10b, the output light with different cir- cular polarization states is deflected into opposite direc- tions. By combining images from two orthogonal



1

JHWP  ± i

=  cos(2k0x sin θ)	sin(2k0x sin θ)	1

sin(2k0x sin θ)	— cos(2k0x sin θ)	± i

polarizations (LCP and RCP), the FoV is doubled in horizontal direction. Besides, PB phase grating can also be



=	1 e

ni

± i2k0x sin θ

(3)

used to enlarge the eyebox of Maxwellian system. For

example, Lin et al.174 demonstrated a 2D pupil duplication in Maxwellian view by stacking two 1D PB gratings and one QWP together. Such a stacked 1D device can also be



as we plotted in Fig. 8b, the incident circularly polarized light will be converted to the opposite handedness with an extra phase, and this phase is also known as geometric phase or Pancharatnam-Berry (PB) phase166. PB phase grating has attracted lots of attention because of its nearly 100% diffraction efﬁciency149. It can be achieved with an electro-optically controlled active grating167,168 or a polymer-based passive grating. Moreover, such a passive PB grating can adopt dual-twist142,169 and multi-twist170

replaced by a 2D PB phase grating. Shi et al.175 proposed a multi-beam interference method to generate the 2D grating pattern, and He et al.176 also fabricated a PB Dammann grating using projection lithography.

An LC lens can be obtained by introducing a para- bolically varying phase to the LC waveplate. The lens pattern can also be generated by electric ﬁeld modulation and pattern alignment, as described in the LC grating section177–180. The surface alignment method enables the













	























PB phase to generate an LC lens whose optical power is independent of the LC birefringence181. Similar to a PB phase grating, the PB phase based LC lens (PB lens)161,182,183 is also a polarization selective optical ele- ment. Its focal length depends on the LCP or RCP input (Fig. 8c). Both passive and active PB lenses can be fabri- cated using a polymer ﬁlm or an LC cell, respectively184. Based on this unique polarization dependent focal length, Tan et al.185 realized a polarization multiplexed multiplane VR display by using a passive PB lens. The working principle of polarization multiplexing is depicted in Fig. 11a1. The system requires a pixelated polarization modulator (PM) to control the ratio between RCP and LCP, allowing independent generation of image content on two virtual planes (Fig. 11a2). Polarization multi- plexing is an elegant solution for creating multiplane displays without sacriﬁcing the frame rate, while keeping the headset lightweight for long-term wearing. However, its limitation is that there are only two orthogonal polarization states, and theoretically only two imaging planes can be generated. Yoo et al.186 presented a foveated display system by using two PB lenses. In this system (Fig. 11b1), the opposite focal lengths of LCP and RCP lead to two modes with high- and low-angular resolutions.

By switching between LCP and RCP, both high and low- angular resolutions can be perceived with different spatial positions, thereby a foveated imaging can be generated (Fig. 11b2). The reported system has an optical efﬁciency of 12.5%, and both active and passive PB lenses can be used for this system. However, this approach requires a space between lenses for the beams to expand to different diameters. How to accomplish a small form factor could be challenging.

For current near-eye displays, a high optical power lens with compact form factor is required, which usually has signiﬁcant chromatic aberrations187 near the edge ﬁeld. To solve this issue, a hybrid lens (combining a passive diffractive PB lens with a refractive lens, Fig. 11c1) has been proposed. Due to the opposite dispersion, their chromatic aberrations can be compensated each other (Fig. 11c2)188. Besides, active PB lens is a good adaptive optics candidate for the AR/VR displays to generate light ﬁeld display by switching between each polarization responses189. Based on recent advance in fast-response LC materials190, the switching time of 1–2 ms has been demonstrated in active PB lens or LC HWP. Besides, LC microlens array (MLA)191,192 and multi-domain LC lens also play important roles in AR/VR systems. One of the















important applications of MLA is the integral imaging light ﬁeld display193. The system can generate multiple views to reconstruct the real object light ﬁeld, thereby the user can observe 3D images with both amplitude and angular information. Currently, the reported integral imaging systems use traditional glass MLA because of its good imaging quality and acceptable form factor. Poten- tial applications of LC MLA with tunable focal length and polarization selectivity in integral imaging display systems are foreseeable183.


---

## Reflective LC planar optics

In a reflective LCOE, the reflection mechanism is based on the Bragg reflection of the employed cholesteric liquid crystal (CLC)194–196. Therefore, this type of diffractive optical element is called as “thick” optical element (e.g., Bragg volume grating). The efﬁciency of such a reflective LCOE is closely related to the device thickness. To establish Bragg reflection, the minimal LC layer thickness is about ten pitches. Besides, the helical CLC structure can be achieved by doping some chiral dopants to a nematic LC host197. To accommodate a wide viewing angle and broadband, we can apply more complex structures, such

as multilayers and gradient pitch198–200. As plotted in Fig. 12, the red dashed lines connect the short axes of the LC directors and represent the Bragg surface. Depending on different Bragg surfaces generated by the LC align- ments, such a reflective LCOE exhibits strong polarization selectivity and can work as a reflector, grating, and on-/ off- axis lens, respectively. The polarization responses of each element are summarized in Fig. 12.

The CLC reflector (Fig. 12a) has a simple structure but can contribute to various applications for AR/VR. In the VR pancake structure, a CLC reflector can replace the QWP and reflective polarizer to obtain a simpler struc- ture. Furthermore, a foveated VR display can be achieved via encoding two images into orthogonal circular polar- izations by using CLC reflector201. As shown in Fig. 13a, the images undergoing different paths experience differ- ent magniﬁcations, and therefore the spatial resolution of the foveal image could be greatly enhanced. Leveraging the polarization selectivity, CLC reflectors can also gen- erate two optical paths in an AR system. Chen et al.202 demonstrated a dual-depth AR system by using two CLC reflectors which are separately placed in sequence to produce two different diopters and optical paths, where



















each path corresponds to one image depth (Fig. 13b). By employing multiple CLC reflectors, more image depths can be produced.

A reflective LC grating can be obtained by introducing a linearly varying phase to the CLC reflector, called polar- ization volume grating (PVG). This linearly changed phase can be generated by surface alignment203–206. Compared to a CLC reflector, the PVG has a more complex structure, where the azo compounds on the photoalignment layer exhibit a sinusoidal pattern along the horizontal axis. Figure 12b depicts the LC distribution of the PVG structure. The Bragg surface is still the line connecting the short axes of the LC directors but with a slanted angle (α). The bottom LC directors tend to follow the sinusoidal pattern, but the helical axis of the bulk CLC is tilted (~25o) to minimize the free energy, therefore producing a transition region from the bottom to top. When the incident beam satisﬁes the Bragg condition, the diffraction angle is twice the slanted angle, and the dif- fraction efﬁciency is the highest207.

In recent years, the reflective LC diffractive couplers (e.g., PVGs) have also been widely studied and demon- strated in lab-level waveguide-based AR prototypes208. Before diving into the PVG-based waveguide structure, we briefly introduce the basic operation principles of the diffractive waveguide AR. As shown in Fig. 14a. the waveguide architecture has diffractive input and out- couplers to deliver the image from light engine to human eye209. A large Etendue beneﬁts from the exit pupil expansion (EPE) process. In practicality, the FoV is still a bottleneck, and the EPE is expected to be 2D in con- sideration of eyebox expansion in both horizontal and vertical directions. The practical FoV is jointly determined by the refractive index (ng) of the waveguides and the angular bandwidth provided by the couplers. A large ng waveguide with wide angular response of the couplers is conducive to expand the FoV.

Currently, surface relief gratings (SRGs) are dominant couplers in waveguide AR products. SRGs have a large index modulation to produce wide angular response and

can achieve a uniform EPE, although the design is somewhat sophisticated210. As the input coupler, both transmissive and reflective SRGs can be considered (Fig. 14a). For the output coupler, a reflective type with suppressed transmission orders is preferred211. Compared to SRGs, PVGs exhibit a smaller index difference, but spatially variant LC orientations, strong circularly polar- ized responses, thin-ﬁlm form factor, and easy fabrication process. To obtain a uniform light output, a polarization management layer consisting of an LC layer with spatially varying orientations can be utilized212. It also offers an additional degree of freedom to control the polarization state of the TIR light.

In the following, we will review some methods employing PVGs as the couplers in the waveguides. To display full-color images, it is feasible to stack R/G/B PVGs as the in- and out-couplers on one waveguide. Weng et al.213 proposed a dual-waveguide structure for a full-color AR. The blue and green PVGs are laminated together on one waveguide, and the red PVG is put solely on the other waveguide (Fig. 14b). Aside from full-color images, for practical applications, it is necessary to take the PVG’s angular response into account to analyze the FoV, especially focusing on the angular bandwidth with 0o as the symmetric center for the in- and out-couplers. The analysis with simulation parameters is listed in Supple- mentary S1. The angular response of a PVG can be adjusted by two methods: changing the LC birefringence and stacking several layers with different Bragg pitches208. Recently, Gu et al.214 experimentally demonstrated this approach based on stacking two PVGs with opposite polarization responses to extend the angular response at the target wavelength, thereby enlarged the observed FoV (Fig. 14c).

In addition to enlarging the angular response, in a waveguide AR, a uniform eyebox is also critical. Generally, there are two methods to create a uniform eyebox. The ﬁrst solution is to manipulate the local efﬁciency at dif- ferent out-coupling regions on the PVG20. Nevertheless, the gradient efﬁciency of PVG (out-coupler) will cause uneven ambient light transmittance to the user’s eye. Another solution is to use a PVG with uniform efﬁciency but attach an LC-based polarization modulation layer (PML) to the bottom of the waveguide212. By modulating the azimuthal angles of the LC directors in the PML, the phase control and thus the polarization control can be achieved. As a result, the output light intensity could be uniform because the reflection efﬁciency of the PVG is dependent on the light polarization.

A reflective LC lens can be obtained by introducing a parabolically varying phase to the CLC reflector. The lens phase proﬁle can be superposed onto either planar-CLC or slanted-PVG pattern to form an on-axis or off-axis CLC lens (Fig. 12c, d). The CLC lens still follows the















polarization selectivity rule as the CLC reflector but exhibits opposite phase proﬁles when the incident light

215,216

impinges from different sides	. In other words, the



incident light with the target polarization can be con- verged or diverged, depending on which side the beam enters. Leveraging the polarization selectivity of CLC, multiple CLC ﬁlms can be stacked together to perform different functionalities for a wide range of applications.

For a VR system, the CLC reflector in pancake design can be further replaced by an on-axis CLC lens. Such a CLC lens provides more degrees of freedom for opti- mizing the optical aberrations217. The combination of refractive and diffractive elements suppresses the chro- matic aberrations due to their opposite dispersion beha- viors, like the result shown in Fig. 11c. The pancake structure can be further evolved to a more compact form factor, if all the refractive optical elements are replaced by the HOEs51 (Fig. 15a). To accommodate the angular selectivity and wavelength selectivity of the HOEs, a monochromatic directional backlight (e.g., 532 nm laser source) is preferred as the light engine. Besides, the on- axis CLC lenses can be implemented in projection AR systems (Fig. 1b) to serve as optical combiners. Li et al.218 proposed a dual-depth AR system219,220 by tilting the CLC lens at 22.5° relative to the eye pupil (Fig. 15d). Since the



















polarization dependent CLC lenses could distinguish two circular polarizations and apply different diopters, two image depths can be obtained.

For off-axis CLC lenses, Yin et al.221 proposed a two off- axis CLC lenses based multiplexing system for projection AR systems (Fig. 1b) to expand the FoV. As shown in Fig. 16a, each lens responds to a different circular polar- ization and works for a speciﬁc FoV. By combining the two views, an expanded tiled FoV can be presented in

















front of the observer222. It should be mentioned that the image aberration could be caused by the dispersion of diffractive elements and large off-axis angle223, especially with a wideband light source. To mitigate these aberra- tions, digital compensation or a light source with narrow bandwidth can be adopted. The off-axis CLC lenses can also serve as the diffractive couplers in Maxwellian dis- plays224–226. Maxwellian view has a tiny eyebox, which is usually assumed to be the pupil size (3–4 mm). The implementation of CLC lenses could perform pupil duplication or pupil steering to expand the eyebox. Pupil duplication refers to the scenario in that multiple view- points are formed simultaneously to cover a larger eyebox. The light intensity in each viewpoint is determined by the total light intensity divided by the viewpoint numbers. For pupil steering, the viewpoint position is timely shifted in response to the pupil location detected by the eye- tracking technique. This approach offers an excellent optical efﬁciency. Xiong et al.224,227 proposed a pupil steering structure by using Maxwellian system with off- axis CLC lenses (Fig. 16b). Each CLC lens is coupled with a switchable HWP. In the voltage-on state, the HWP converts the LCP light into RCP light, which is reflected by the ﬁrst CLC lens and steered into the ﬁrst viewpoint. As the pupil moves to a second viewpoint, the ﬁrst HWP is turned off and the second HWP is switched on. As a result, the second CLC lens reflects the image toward the pupil. More viewpoints can be accommodated by stacking more CLC lenses and using ultrathin (~100 μm) glass substrates to keep the package compact and lightweight.

Apart from generating or switching between several viewpoints, a gaze-matched function can also be realized to accommodate the eye rotation in a Maxwellian system. In the scenario of gaze-matching, the exit pupil should be aligned with the ocular pupil. In other words, the chief ray should match with the eye gazing direction. To meet this requirement, the incident light angle on the imaging couplers should be modulated in real time. Kim et al.228 proposed a mechanical shifter to shift the horizontal position of the imaging coupler. This approach can directly achieve gaze-matching; however, the mechanical shifter increases the complexity and weight of the system. The aberration will also arise when the same holographic lens coupler is shifted, since the probing wave on the holographic lens coupler fails to match the wavefront of the reference wave used in the exposure process. Zou et al.150 developed a gaze-matched Maxwellian system by employing multiple off-axis CLC lenses with different patterns to accommodate different incident light direc- tions. As shown in Fig. 16c, three lenses are designed for three exit pupils to align with the ocular pupil positions when the eye rotates. Since each lens can be speciﬁcally designed for one incident angle, the aberration will be negligible. However, this approach could become bulkier if more viewpoints are required to cover a large range of eye rotation. To make it reasonably practical, some compromise can be made between the viewpoint numbers and the degree of gaze-matching. Although the Maxwel- lian display is limited to a tiny eyebox, recalling that the waveguide framework can support a large eyebox. By











combining these two advantages together, Xiong et al.229 proposed a scanning waveguide display to achieve a wide horizontal FoV (~80°) by deploying an off-axis CLC lens array as the out-coupler (Fig. 16d). The collimating light is outcoupled by the off-axis CLC lens array and then forms multiple viewpoints. In this framework, the FoV is no longer constrained by the refractive index of the wave- guide but solely decided by the f-number of each lens element. Because of the robust CLC alignment, the off- axis CLC lens can reach a small f-number (~0.6).


---

## Conclusion and outlook

AR/VR technologies combined with advanced LC devices have emerged as a signiﬁcant new direction for novel displays and information platforms, with potential for a wide range of applications. To enable a compact form factor and high image quality in wearable AR/VR headsets, advanced LC devices play important roles, ran- ging from light engines to various functional optics. In this review, we divide these advanced LC devices into three categories: high-dynamic-range LCDs, LCoS including amplitude and phase modulators, and planar optics. Although LCDs for VR headsets suffer from low transmittance issues caused by small aperture ratios and disclination lines blocking light, achieving a high- performing VR that is compatible with directional back- light and spatial patterned modulator techniques repre- sents a promising solution. At the same time, LCoS SLMs offer unrivaled phase modulation to realize holographic views beyond conventional displays. Further advance- ments in device engineering and fabrication processes are expected to improve the performance of LCDs and LCoS SLMs in AR/VR applications. Emerging LC planar optics provide excellent optical properties with an ultrathin form factor and high efﬁciency. These advanced LC-based devices play pivotal roles for systematically improving the image quality and form factor of the AR/VR displays.

Acknowledgements

The authors are indebted to Goertek Electronics for the financial support.



Author contributions

K.Y. conceived the idea and initiated the project. K.Y. mainly wrote the manuscript and conducted the experiment. E.-L.H., J.Z., Y.L. Z.Y., and Q.Y. helped with the experiment. P.-C.L. conducted the power consumption simulation. C.-L.L., and S.-T.W. supervised the project and edited the manuscript.



Data availability

All data needed to evaluate the conclusions in the paper are present in the paper. Additional data related to this paper may be requested from the authors.



Conflict of interest

The authors declare no competing interests.



Supplementary information The online version contains supplementary material available at https://doi.org/10.1038/s41377-022-00851-3.

Received: 8 March 2022 Revised: 4 May 2022 Accepted: 14 May 2022









References

Schadt, M. Liquid crystal materials and liquid crystal displays. Annu. Rev. Mater. Sci. 27, 305–379 (1997).

Chen, H. W. et al. Liquid crystal display and organic light-emitting diode display: present status and future perspectives. Light.: Sci. Appl. 7, 17168 (2018).

Yang, D. K. & Wu, S. T. Fundamentals of Liquid Crystal Devices 2nd edn (John Wiley & Sons, Hoboken, 2014).

Geffroy, B., le Roy, P. & Prat, C. Organic light-emitting diode (OLED) tech- nology: materials, devices and display technologies. Polym. Int. 55, 572–582 (2006).

Kim, S. et al. Low-power flexible organic light-emitting diode display device.

Adv. Mater. 23, 3511–3516 (2011).

Riel, H. et al. Tuning the emission characteristics of top-emitting organic light-emitting devices by means of a dielectric capping layer: an experi- mental and theoretical study. J. Appl. Phys. 94, 5290–5296 (2003).

Wu, T. Z. et al. Mini-LED and Micro-LED: promising candidates for the next generation display technology. Appl. Sci. 8, 1557 (2018).

Huang, Y. G. et al. Mini-LED, Micro-LED and OLED displays: present status and

future perspectives. Light.: Sci. Appl. 9, 105 (2020).

Tan, G. J. et al. High dynamic range liquid crystal displays with a mini-LED backlight. Opt. Express 26, 16572–16584 (2018).

Lee, V. W., Twu, N. & Kymissis, I. Micro-LED technologies and applications. Inf. Disp. 32, 16–23 (2016).

Liu, Z. J. et al. Micro-light-emitting diodes with quantum dots in display technology. Light.: Sci. Appl. 9, 83 (2020).

Kress, B. C. Optical Architectures for Augmented-, Virtual-, and Mixed-Reality Headsets (SPIE Press, Bellingham, 2020).

Lazarev, G. et al. LCOS Spatial Light Modulators: Trends and Applications. in Optical Imaging and Metrology: Advanced Technologies (Wiley-VCH Verlag & Co., Weinheim, 2012).

Zhang, Z. C., You, Z. & Chu, D. P. Fundamentals of phase-only liquid crystal on silicon (LCOS) devices. Light.: Sci. Appl. 3, e213 (2014).

Bleha, W. P. Jr. & Lei, L. A. Proc. SPIE 8736, Display Technologies and Applications for Defense, Security, and Avionics VII (SPIE, Baltimore, 2013).

Wang, B. et al. Liquid crystal lens with spherical electrode. Japanese Journal of

Applied. Physics 41, L1232 (2002).

Lin, Y. H., Wang, Y. J. & Reshetnyak, V. Liquid crystal lenses with tunable focal length. Liq. Cryst. Rev. 5, 111–143 (2017).

Desai, P. R. et al. A review paper on oculus rift-a virtual reality headset. Int. J. Eng. Trends Technol. 13, 175–179 (2014).

Yin, K. et al. Virtual reality and augmented reality displays: advances and future perspectives. J. Phys.: Photonics 3, 022010 (2021).

Xiong, J. H. et al. Augmented reality and virtual reality displays: emerging technologies and future perspectives. Light.: Sci. Appl. 10, 216 (2021).

Hoffman, D. M. et al. Vergence–accommodation conflicts hinder visual performance and cause visual fatigue. J. Vis. 8, 33 (2008).

Kramida, G. Resolving the vergence-accommodation conflict in head- mounted displays. IEEE Trans. Vis. Comput. Graph. 22, 1912–1931 (2016).

Yanoff, M. & Duker, J. S. Ophthalmology 5th edn (Elsevier Health Sciences, Amsterdam, 2018).

Cheng, D. W. et al. Design and manufacture AR head-mounted displays: a review and outlook. Light.: Adv. Manuf. 2, 350–369 (2021).

Cheng, D. W. et al. Design of an optical see-through head-mounted display with a low f-number and large field of view using a freeform prism. Appl. Opt. 48, 2655–2668 (2009).

Wang, Y. T., Cheng, D. W. & Xu, C. Proc. Optical Design and Fabrication (OSA, 2017).

Schadt, M. Milestone in the history of field-effect liquid crystal displays and materials. Jpn. J. Appl. Phys. 48, 03B001 (2009).

Yeh, P. & Gu, C. Optics of Liquid Crystal Displays 2nd edn (Hoboken: John Wiley & Sons, 2010).

Hsiang, E. L. et al. Prospects and challenges of mini-LED, OLED, and micro- LED displays. J. Soc. Inf. Disp. 29, 446–465 (2021).

Suzuki, M. Two approaches to the luminance enhancement of backlighting units for LCDs. J. Soc. Inf. Disp. 7, 157–161 (1999).

Li, Y., Wu, T. X. & Wu, S. T. Design optimization of reflective polarizers for LCD

backlight recycling. J. Disp. Technol. 5, 335–340 (2009).











Jang, E. et al. White-light-emitting diodes with quantum dot color converters

for display backlights. Adv. Mater. 22, 3076–3080 (2010).

Bourzac, K. Quantum dots go on display. Nature 493, 283 (2013).

Yoon, G. W. et al. Edge-lit LCD backlight unit for 2D local dimming. Opt. Express 26, 20802–20812 (2018).

Hsiang, E. L. et al. Halo effect in high-dynamic-range mini-LED backlit LCDs.

Opt. Express 28, 36822–36837 (2020).

Kim, C. et al. 61-1: FMM pixel patterning for various OLED displays. SID Symp .

Dig. Tech. Pap. 51, 905–908 (2020).

Levy, G. B. et al. An 852/spl times/600 pixel OLED-on-silicon color micro- display using CMOS subthreshold-voltage-scaling current drivers. IEEE J. Solid- State Circuits 37, 1879–1889 (2002).

Vogel, U. et al. OLED-on-silicon microdisplays: technology, devices, applica- tions. In Proc. 48th European Solid-State Device Research Conference (IEEE, Germany, 2018)

Benitez, P. et al. Advanced freeform optics enabling ultra-compact VR headsets. In Proc. SPIE 10335, Digital Optical Technologies (SPIE, Germany, 2017)

Kim, C. et al. 27.2: Invited Paper: High resolution FMM process for AMOLED displays. SID Symp . Dig. Tech. Pap. 50, 280–282 (2019).

Ghosh, A. et al. 62-1: Invited Paper: Directly patterned 2645 PPI full color OLED microdisplay for head mounted wearables. SID Symp . Dig. Tech. Pap. 47, 837–840 (2016).

Malinowski, P. E. et al. High resolution photolithography for direct view active matrix organic light-emitting diode augmented reality displays. J. Soc. Inf. Disp. 26, 128–136 (2018).

Kim, K. et al. High-resolution electrohydrodynamic jet printing of small- molecule organic light-emitting diodes. Nanoscale 7, 13410–13415 (2015).

Motoyama, Y. et al. High-efficiency OLED microdisplay with microlens array. J.

Soc. Inf. Disp. 27, 354–360 (2019).

Cho, H. et al. White organic light-emitting diode (OLED) microdisplay with a tandem structure. J. Inf. Disp. 20, 249–255 (2019).

Curcio, C. A. et al. Human photoreceptor topography. J. Comp. Neurol. 292, 497–523 (1990).

Gagnon, H. C. et al. Gap affordance judgments in mixed reality: testing the role of display weight and field of view. Front. Virtual Real. 2, 654656 (2021).

Perrin, A. F. et al. Proc. SPIE 10396, Applications of Digital Image Processing XL

(SPIE, California, 2017).

Yan, Z. S. et al. Proc. 19th International Workshop on Mobile Computing Sys- tems & Applications. 13–18 (ACM, 2018).

Narasimhan, B. A. Proc. SPIE 10676, Digital Optics for Immersive Displays (SPIE, France, 2018).

Maimone, A. & Wang, J. R. Holographic optics for thin and lightweight virtual

reality. ACM Trans. Graph. 39, 67 (2020).

Chang, K. D. et al. A hybrid simulated method for analyzing the optical efficiency of a head-mounted display with a quasi-crystal OLED panel. Opt. Express 22, A567–A576 (2014).

Yang, C. L. et al. 47-1: Invited Paper: High resolution HDR VR display using Mini-LED. SID Symp . Dig. Tech. Pap. 52, 636–639 (2021).

Peng, F. L. et al. Analytical equation for the motion picture response time of display devices. J. Appl. Phys. 121, 023108 (2017).

Igarashi, Y. et al. 43.3: Summary of moving picture response time (MPRT) and futures. SID Symp . Dig. Tech. Pap. 35, 1262–1265 (2004).

Gou, F. W. et al. Motion-blur-free LCD for high-resolution virtual reality dis- plays. J. Soc. Inf. Disp. 26, 223–228 (2018).

Wu, S. T. Nematic liquid crystal modulator with response time less than 100 μs at room temperature. Appl. Phys. Lett. 57, 986–988 (1990).

Engel, M. et al. 43.1: Invited Paper: UB-FFS: new materials for advanced mobile applications. SID Symp . Dig. Tech. Pap. 46, 645–647 (2015).

Yoon, J. H. et al. Fast switching, high contrast and high resolution liquid crystal device for virtual reality display. Opt. Express 26, 34142–34149 (2018).

Gou, F. W. et al. Submillisecond-response liquid crystal for high-resolution virtual reality displays. Opt. Express 25, 7984–7997 (2017).

Matsushima, T., Kimura, S. & Komura, S. Fast response in-plane switching liquid crystal display mode optimized for high-resolution virtual-reality head- mounted display. J. Soc. Inf. Disp. 29, 221–229 (2021).

Jo, S. I. et al. 44-2: Invited Paper: Fast response time advanced high perfor- mance in-plane switching (AH-IPS) mode for high resolution application. SID Symp . Dig. Tech. Pap. 49, 581–584 (2018).

Hsiang, E. L. et al. Optimizing the display performance for virtual reality systems. OSA Contin. 4, 3052–3067 (2021).

Zhan, T. et al. Enhancing the optical efficiency of near-eye displays with liquid

crystal optics. Crystals 11, 107 (2021).

Gao, Y. T. et al. A high performance single-domain LCD with wide luminance

distribution. J. Disp. Technol. 11, 315–324 (2015).

Käläntär, K. A directional backlight with narrow angular luminance distribu- tion for widening the viewing angle for an LCD with a front-surface light- scattering film. J. Soc. Inf. Disp. 20, 133–142 (2012).

Pan, J. W. & Fan, C. W. High luminance hybrid light guide plate for backlight module application. Opt. Express 19, 20079–20087 (2011).

Lee, J. H. et al. Simple liquid crystal display backlight unit comprising only a single-sheet micropatterned polydimethylsiloxane (PDMS) light-guide plate. Opt. Lett. 32, 2665–2667 (2007).

Wang, Y. J. et al. High directional backlight using an integrated light guide plate. Opt. Express 23, 1567–1575 (2015).

Zhang, Y. L. et al. Directional backlight module based on pixelated nano- gratings. Opt. Commun. 459, 125034 (2020).

Peng, F. L. et al. 33-1: Invited Paper: Liquid crystals for virtual reality (VR). SID Symp . Dig. Tech. Pap. 52, 427–430 (2021).

Deng, Z. et al. 74-5: Late-News Paper: High dynamic range incell LCD with excellent performance. SID Symp . Dig. Tech. Pap. 49, 996–998 (2018).

Wu, Y. E. et al. 41-1: Invited Paper: Active matrix mini-LED backlights for 1000PPI VR LCD. SID Symp . Dig. Tech. Pap. 50, 562–565 (2019).

Hoffman, D. M., Stepien, N. N. & Xiong, W. The importance of native panel contrast and local dimming density on perceived image quality of high dynamic range displays. J. Soc. Inf. Disp. 24, 216–228 (2016).

Ye, Z. T. et al. Mini-LEDs with diffuse reflection cavity arrays and quantum dot film for thin, large-area, high-luminance flat light source. Nanomaterials 11, 2395 (2021).

Huang, C. H. et al. Micro-LED backlight module by deep reinforcement learning and micro-macro-hybrid environment control agent. Photonics Res. 10, 269–279 (2022).

Chen, E. G. et al. Edge/direct-lit hybrid mini-LED backlight with U-grooved light guiding plates for local dimming. Opt. Express 29, 12179–12194 (2021).

Kikuchi, S. et al. Thin mini-LED backlight using reflective mirror dots with high luminance uniformity for mobile LCDs. Opt. Express 29, 26724–26735 (2021).

Huang, Y. G. et al. Prospects and challenges of mini-LED and micro-LED displays. J. Soc. Inf. Disp. 27, 387–401 (2019).

Seetzen, H. et al. High dynamic range display systems. ACM Trans. Graph. 23,

760–768 (2004).

Song, S. J. et al. Deep-learning-based pixel compensation algorithm for local dimming liquid crystal displays of quantum-dot backlights. Opt. Express 27, 15907–15917 (2019).

Ji, Z. H. et al. 28-2: A Novel Local Dimming algorithm with HDR for VR system based on GPU. SID Symp . Dig. Tech. Pap. 50, 386–389 (2019).

Lin, F. C. et al. Dynamic backlight gamma on high dynamic range LCD TVs. J.

Disp. Technol. 4, 139–146 (2008).

Deng, M. Y. et al. Reducing power consumption of active-matrix mini-LED backlit LCDs by driving circuit. IEEE Trans. Electron Devices 68, 2347–2354 (2021).

Lin, C. L. et al. AM PWM driving circuit for mini-LED backlight in liquid crystal displays. IEEE J. Electron Devices 9, 365–372 (2021).

Hsiang, E. L. et al. 37-3: Power consumption of OLED and μLED displays. SID Symp . Dig. Tech. Pap. 51, 528–531 (2020).

Xiao, J. C. et al. Mini-LED backlight units on glass for 75-inch 8K resolution liquid crystal display. J. Soc. Inf. Disp. 30, 54–60 (2022).

Masuda, T. et al. 28-3: Mini-LED backlight for HDR compatible mobile dis- plays. SID Symp . Dig. Tech. Pap. 50, 390–393 (2019).

Tseng, S. H. & Lu, C. W. P-118: A 10-bit active-matrix display driver for passive- matrix liquid crystal displays. SID Symp . Dig. Tech. Pap. 52, 1190–1192 (2021).

Akimoto, H. et al. 46-3: Invited Paper: Design and process of 2D backlight beyond HDR 5000 nits. SID Symp . Dig. Tech. Pap. 52, 628–631 (2021).

Huang, Y. et al. Liquid-crystal-on-silicon for augmented reality displays. Appl. Sci. 8, 2366 (2018).

Maimone, A., Georgiou, A. & Kollin, J. S. Holographic near-eye displays for virtual and augmented reality. ACM Trans. Graph. 36, 85 (2017).

Petersen, K. E. Micromechanical light modulator array fabricated on silicon.

Appl. Phys. Lett. 31, 521–523 (1977).











Stahl, R. et al. Modular sub-wavelength diffractive light modulator for high- definition holographic displays. J. Phys.: Conf. Ser. 415, 012057 (2013).

Haist, T. & Osten, W. Holography using pixelated spatial light modulators— part 1: theory and basic considerations. J. Micro/Nanolithogr., MEMS, MOEMS 14, 041310 (2015).

Cuypers, D., De Smet, H. & Van Calster, A. VAN LCOS microdisplays: a decade

of technological evolution. J. Disp. Technol. 7, 127–134 (2011).

Wu, S. T. & Wu, C. S. Mixed-mode twisted nematic liquid crystal cells for reflective displays. Appl. Phys. Lett. 68, 1455–1457 (1996).

Yang, Q. et al. Fast-response liquid crystal phase modulators with an excel- lent photostability. Crystals 10, 765 (2020).

Christmas, J. & Collings, N. Displays based on dynamic phase-only holo- graphy. Appl. Sci. 8, 685 (2018).

Yeom, H. J. et al. 3D holographic head mounted display using holographic optical elements with astigmatism aberration compensation. Opt. Express 23, 32025–32034 (2015).

Chang, C. L. et al. Toward the next-generation VR/AR optics: a review of holographic near-eye displays from a human-centric perspective. Optica 7, 1563–1578 (2020).

Lazarev, G. et al. Beyond the display: phase-only liquid crystal on Silicon devices and their applications in photonics [Invited]. Opt. Express 27, 16206–16249 (2019).

Abeeluck, A. K. et al. 58-2: Invited Paper: High-performance displays for wearable and HUD applications. SID Symp . Dig. Tech. Pap. 49, 768–771 (2018).

Gauza, S. et al. UV stable high birefringence liquid crystals.Jpn. J. Appl. Phys.

43, 7176–7180 (2004).

Zou, J. Y. et al. Fast-response liquid crystals for 6G optical communications.

Crystals 11, 797 (2021).

Chiang, K. H. F., Wu, S. T. & Chen, S. H. Fringing field effect of the liquid-crystal-

on-silicon devices. Jpn. J. Appl. Phys. 41, 4577–4585 (2002).

Fan-Chiang, K. H., Chen, S. H. & Wu, S. T. High-definition vertically aligned liquid crystal microdisplays using a circularly polarized light. Appl. Phys. Lett. 87, 031110 (2005).

Gu, L. L. et al. Fringing-field minimization in liquid-crystal-based high- resolution switchable gratings. Appl. Phys. Lett. 87, 201106 (2005).

Liao, C. H. Reducing fringe field effect for spatial light modulator. US Patent 10,416,498 (2018).

Isomae, Y. et al. Design of 1-μm-pitch liquid crystal spatial light modulators having dielectric shield wall structure for holographic display with wide field of view. Opt. Rev. 24, 165–176 (2017).

Isomae, Y. et al. Alignment control of liquid crystals in a 1.0-μm-pitch spatial light modulator by lattice-shaped dielectric wall structure. J. Soc. Inf. Disp. 27, 251–258 (2019).

Efron, U., Apter, B. & Bahat-Treidel, E. Fringing-field effect in liquid-crystal beam-steering devices: an approximate analytical model. J. Optical Soc. Am. A 21, 1996–2008 (2004).

Moser, S., Ritsch-Marte, M. & Thalhammer, G. Model-based compensation of pixel crosstalk in liquid crystal spatial light modulators. Opt. Express 27, 25046–25063 (2019).

Persson, M., Engström, D. & Goksör, M. Reducing the effect of pixel crosstalk in phase only spatial light modulators. Opt. Express 20, 22334–22343 (2012).

Zhan, T. et al. Augmented reality and virtual reality displays: perspectives and

challenges. iScience 23, 101397 (2020).

Li, P. K. LCOS and AR/VR. Inf. Disp. 34, 12–15 (2018).

Pulli, K. 11-2: Invited Paper: Meta 2: immersive optical-see-through augmented reality. SID Symp . Dig. Tech. Pap. 48, 132–133 (2017).

Xiong, J. H. et al. Holographic optical elements for augmented reality: principles, present status, and future perspectives. Adv. Photonics Res. 2, 2000049 (2021).

Park, J. H. & Lee, B. Holographic techniques for augmented reality and virtual

reality near-eye displays. Light.: Adv. Manuf. 3, 9 (2022).

Lee, S. et al. Additive light field displays: realization of augmented reality with

holographic optical elements. ACM Trans. Graph. 35, 60 (2016).

Jang, C. et al. Retinal 3D: augmented reality near-eye display via pupil-tracked light field projection on retina. ACM Trans. Graph. 36, 190 (2017).

Evans, G. et al. Proc. SPIE 10197, Degraded Environments: Sensing, Processing, and Display (SPIE, California, 2017).

Lin, G. et al. Proc. 22nd International Workshop on Mobile Computing Systems and Applications. 133–139. (Virtual, UK: 2021).

Frommer, A. Proc. SPIE 11764, SPIE AVR21 Industry Talks II. 1176403 (SPIE, 2021).

Weber, M. F. et al. Display with reflective polarizer and randomizing cavity. US

Patent 6,025,897 (2000).

Brennesholtz, M. S. & Stupp, E. H. Projection Displays. (Chichester: John Wiley &

Sons, 2008).

Duelli, M. & Taylor, A. T. 16.3: Novel polarization conversion and integration system for projection displays. SID Symp . Dig. Tech. Pap. 34, 766–769 (2003).

Du, T. et al. Complex nanoscale-ordered liquid crystal polymer film for high transmittance holographic polarizer. Adv. Mater. 27, 7191–7195 (2015).

Kim, J. et al. Efficient and monolithic polarization conversion system based on

a polarization grating. Appl. Opt. 51, 4852–4857 (2012).

Moon, E. et al. Holographic head-mounted display with RGB light emitting diode light source. Opt. Express 22, 6526–6534 (2014).

Chen, J. S. & Chu, D. P. Improved layer-based method for rapid hologram generation and real-time interactive holographic display applications. Opt. Express 23, 18143–18155 (2015).

Chen, Z. D. et al. A see-through holographic head-mounted display with the

large viewing angle. Opt. Commun. 384, 125–129 (2017).

Shi, L. et al. Near-eye light field holographic rendering with spherical waves for wide field of view interactive 3D computer graphics. ACM Trans. Graph. 36, 236 (2017).

Kuo, G. et al. High resolution étendue expansion for holographic displays.

ACM Trans. Graph. 39, 66 (2020).

Baek, S. H. et al. Neural Étendue expander for ultra-wide-angle high-fidelity holographic display. arXiv https://doi.org/10.48550/arXiv.2109.08123 (2021).

Cui, W. & Gao, L. Optical mapping near-eye three-dimensional display with correct focus cues. Opt. Lett. 42, 2475–2478 (2017).

Matsuda, N., Fix, A. & Lanman, D. Focal surface displays. ACM Trans. Graph. 36,

86 (2017).

Peng, Y. F. et al. Neural holography with camera-in-the-loop training. ACM Trans. Graph. 39, 185 (2020).

Shi, L. et al. Towards real-time photorealistic 3D holography with deep neural

networks. Nature 591, 234–239 (2021).

Chen, P. et al. Liquid-crystal-mediated geometric phase: from transmissive to broadband reflective planar optics. Adv. Mater. 32, 1903665 (2020).

Beeckman, J., Neyts, K. & Vanbrabant, P. J. M. Liquid-crystal photonic appli- cations. Optical Eng. 50, 081202 (2011).

Oh, C. & Escuti, M. J. Achromatic diffraction from polarization gratings with high efficiency. Opt. Lett. 33, 2287–2289 (2008).

Zhan, T. et al. Pancharatnam–Berry optical elements for head-up and near- eye displays [Invited]. J. Optical Soc. Am. B 36, D52–D65 (2019).

Tabiryan, N. V. et al. Thin waveplate lenses of switchable focal length—new generation in optics. Opt. Express 23, 25783–25794 (2015).

Wu, S. T., Efron, U. & Hess, L. D. Birefringence measurements of liquid crystals.

Appl. Opt. 23, 3911–3915 (1984).

Nersisyan, S. et al. Fabrication of liquid crystal polymer axial waveplates for UV-IR wavelengths. Opt. Express 17, 11926–11934 (2009).

Komanduri, R. K., Lawler, K. F. & Escuti, M. J. Multi-twist retarders: broadband retardation control using self-aligning reactive liquid crystal layers. Opt. Express 21, 404–420 (2013).

Lu, L., McEldowney, S. C. & Saarikko, P. Focus adjusting Pancharatnam Berry phase liquid crystal lenses in a head-mounted display. US Patent 10,379,419 (2019).

Kim, J. et al. Wide-angle nonmechanical beam steering using thin liquid crystal polarization gratings. In Proc. SPIE 7093, Advanced Wavefront Control: Methods, Devices, and Applications VI. 709302 (SPIE, California, 2008).

Zou, J. Y., Li, L. S. & Wu, S. T. Gaze-matched pupil steering Maxwellian-view augmented reality display with large angle diffractive liquid crystal lenses. Adv. Photon. Res. 3, 2100362 (2022).

Tan, G. J. et al. Foveated imaging for near-eye displays. Opt. Express 26, 25076–25085 (2018).

Lavrentovich, M. D., Sergan, T. A. & Kelly, J. R. Switchable broadband achromatic half-wave plate with nematic liquid crystals. Opt. Lett. 29, 1411–1413 (2004).

He, Z., Nose, T. & Sato, S. Diffraction and polarization properties of a liquid crystal grating. Japanese Journal of Applied. Physics 35, 3529–3530 (1996).

Farn, M. W. Binary gratings with increased efficiency. Appl. Opt. 31, 4453–4458 (1992).

Yan, J., Li, Y. & Wu, S. T. High-efficiency and fast-response tunable phase grating using a blue phase liquid crystal. Opt. Lett. 36, 1404–1406 (2011).

Wang, X. et al. Liquid-crystal blazed-grating beam deflector. Appl. Opt. 39, 6545–6555 (2000).











Ono, H. et al. Highly stable polarization gratings in photocrosslinkable polymer liquid crystals. J. Appl. Phys. 94, 1298–1303 (2003).

Feng, X. Y. et al. Closer look at transmissive polarization volume holograms: geometry, physics, and experimental validation. Appl. Opt. 60, 580–592 (2021).

Honma, M. & Nose, T. Polarization-independent liquid crystal grating fabri- cated by microrubbing process. Jpn. J. Appl. Phys. 42, 6992–6997 (2003).

Yi, Y. et al. Alignment of liquid crystals by topographically patterned polymer

films prepared by nanoimprint lithography. Appl. Phys. Lett. 90, 163510 (2007).

Kim, J. et al. Fabrication of ideal geometric-phase holograms with arbitrary wavefronts. Optica 2, 958–964 (2015).

De Sio, L. et al. Digital polarization holography advancing geometrical phase optics. Opt. Express 24, 18297–18306 (2016).

Eakin, J. N. et al. Zero voltage Freedericksz transition in periodically aligned liquid crystals. Appl. Phys. Lett. 85, 1671–1673 (2004).

Schadt, M., Seiberle, H. & Schuster, A. Optical patterning of multi-domain liquid-crystal displays with wide viewing angles. Nature 381, 212–215 (1996).

Escuti, M. J. et al. Simplified spectropolarimetry using reactive mesogen polarization gratings. In Proc. SPIE 6302, Imaging Spectrometry XI. 630207 (SPIE, California, 2006).

Pancharatnam, S. Generalized theory of interference and its applications. Proc.

Indian Acad. Sci. Sect. A 44, 398–417 (1956).

Chen, J. et al. An electro-optically controlled liquid crystal diffraction grating.

Appl. Phys. Lett. 67, 2588–2590 (1995).

McManamon, P. F. et al. A review of phased array steering for narrow-band electrooptical systems. Proc. IEEE 97, 1078–1096 (2009).

Gao, K. et al. High-efficiency large-angle Pancharatnam phase deflector based on dual-twist design. Opt. Express 25, 6283–6293 (2017).

Zou, J. Y. et al. Broadband wide-view Pancharatnam–Berry phase deflector.

Opt. Express 28, 4921–4927 (2020).

Lee, Y. H., Zhan, T. & Wu, S. T. Enhancing the resolution of a near-eye display with a Pancharatnam–Berry phase deflector. Opt. Lett. 42, 4732–4735 (2017).

Zhan, T. et al. Improving near-eye display resolution by polarization multi- plexing. Opt. Express 27, 15327–15334 (2019).

Yoo, C. et al. Extended-viewing-angle waveguide near-eye display with a polarization-dependent steering combiner. Opt. Lett. 45, 2870–2873 (2020).

Lin, T. G. et al. Maxwellian near-eye display with an expanded eyebox. Opt. Express 28, 38616–38625 (2020).

Shi, Y. et al. Photoalignment-induced two-dimensional liquid crystal polar- ization structure via multi-beam polarization interferometry. Opt. Express 26, 7683–7692 (2018).

He, Z. Q. et al. Enlarging the eyebox of Maxwellian displays with a custo- mized liquid crystal Dammann grating. Crystals 11, 195 (2021).

Li, L. W., Bryant, D. & Bos, P. J. Liquid crystal lens with concentric electrodes and inter-electrode resistors. Liq. Cryst. Rev. 2, 130–154 (2014).

Naumov, A. F. et al. Liquid-crystal adaptive lenses with modal control. Opt. Lett. 23, 992–994 (1998).

Ye, M. & Sato, S. Optical properties of liquid crystal lens of any size. Jpn. J. Appl.

Phys. 41, L571–L573 (2002).

Li, G. Q. et al. Switchable electro-optic diffractive lens with high efficiency for ophthalmic applications. Proc. Natl Acad. Sci. USA 103, 6100–6104 (2006).

Tabiryan, N. V. et al. Advances in transparent planar optics: enabling large aperture, ultrathin lenses. Adv. Optical Mater. 9, 2001692 (2021).

Gao, K. et al. Thin-film Pancharatnam lens with low f-number and high quality. Opt. Express 23, 26086–26094 (2015).

He, Z. Q. et al. Switchable Pancharatnam–Berry microlens array with nano- imprinted liquid crystal alignment. Opt. Lett. 43, 5062–5065 (2018).

Gao, K. et al. Nonmechanical zoom lens based on the Pancharatnam phase effect. Appl. Opt. 55, 1145–1150 (2016).

Tan, G. J. et al. Polarization-multiplexed multiplane display. Opt. Lett. 43, 5651–5654 (2018).

Yoo, C. et al. Foveated display system based on a doublet geometric phase lens. Opt. Express 28, 23690–23702 (2020).

O’Shea, D. C. Specifying dispersion in the design of diffractive optics. Appl. Opt. 33, 8124 (1994).

Zhan, T. et al. Practical chromatic aberration correction in virtual reality dis- plays enabled by cost-effective ultra-broadband liquid crystal polymer lenses. Adv. Optical Mater. 8, 1901360 (2020).

Zhan, T., Lee, Y. H. & Wu, S. T. High-resolution additive light field near-eye display by switchable Pancharatnam–Berry phase lenses. Opt. Express 26, 4863–4872 (2018).

Zou, J. Y. et al. Fast-response liquid crystal for spatial light modulator and LiDAR applications. Crystals 11, 93 (2021).

He, Z. Q. et al. Adaptive liquid crystal microlens array enabled by two-photon

polymerization. Opt. Express 26, 21184–21193 (2018).

Ma, L. L. et al. Self-assembled asymmetric microlenses for four-dimensional visual imaging. ACS Nano 13, 13709–13715 (2019).

Martínez-Corral, M. & Javidi, B. Fundamentals of 3D imaging and displays: a tutorial on integral imaging, light-field, and plenoptic systems. Adv. Opt. Photonics 10, 512–566 (2018).

Kobashi, J., Yoshida, H. & Ozaki, M. Planar optics with patterned chiral liquid crystals. Nat. Photonics 10, 389–392 (2016).

Kobashi, J., Yoshida, H. & Ozaki, M. Polychromatic optical vortex generation from patterned cholesteric liquid crystals. Phys. Rev. Lett. 116, 253903 (2016).

Chen, P. et al. Chirality invertible superstructure mediated active planar optics.

Nat. Commun. 10, 2518 (2019).

St. John, W. D. et al. Bragg reflection from cholesteric liquid crystals. Phys. Rev.

E 51, 1191–1198 (1995).

Mitov, M. Cholesteric liquid crystals with a broad light reflection band. Adv. Mater. 24, 6260–6276 (2012).

White, T. J. et al. Photoinduced broadening of cholesteric liquid crystal reflectors. J. Appl. Phys. 107, 073110 (2010).

Broer, D. J., Lub, J. & Mol, G. N. Wide-band reflective polarizers from cho- lesteric polymer networks with a pitch gradient. Nature 378, 467–469 (1995).

Yin, K. et al. Foveated imaging by polarization multiplexing for compact near-

eye displays. J. Soc. Inf. Disp. 30, 381–386 (2022).

Chen, Q. M. et al. Multi-plane augmented reality display based on cholesteric

liquid crystal reflective films. Opt. Express 27, 12039–12047 (2019).

Yin, K. et al. Patterning liquid-crystal alignment for ultrathin flat optics. ACS Omega 5, 31485–31489 (2020).

Chigrinov, V. G., Kozenkov, V. M. & Kwok, H. S. Photoalignment of Liquid Crys- talline Materials: Physics and Applications (Hoboken: John Wiley & Sons, 2008).

Schadt, M. et al. Surface-induced parallel alignment of liquid crystals by linearly polymerized photopolymers. Jpn. J. Appl. Phys. 31, 2155–2164 (1992).

Chigrinov, V., Kudreyko, A. & Guo, Q. Patterned photoalignment in thin films: physics and applications. Crystals 11, 84 (2021).

Nys, I. et al. Tilted chiral liquid crystal gratings for efficient large-angle dif- fraction. Adv. Optical Mater. 7, 1901364 (2019).

Yin, K., Lin, H. Y. & Wu, S. T. Chirped polarization volume grating for wide FOV and high-efficiency waveguide-based AR displays. J. Soc. Inf. Disp. 28, 368–374 (2020).

Kress, B. C. Optical waveguide combiners for AR headsets: features and limitations. In Proc. SPIE 11062, Digital Optical Technologies. 110620 J. (SPIE, Germany, 2019).

Bai, B. F. et al. Optimization of nonbinary slanted surface-relief gratings as high-efficiency broadband couplers for light guides. Appl. Opt. 49, 5454–5464 (2010).

Äyräs, P., Saarikko, P. & Levola, T. Exit pupil expander with a large field of view based on diffractive optics. J. Soc. Inf. Disp. 17, 659–664 (2009).

Lee, Y. H. et al. Compact see-through near-eye display with depth adaption. J.

Soc. Inf. Disp. 26, 64–70 (2018).

Weng, Y. S. et al. Liquid-crystal-based polarization volume grating applied for

full-color waveguide displays. Opt. Lett. 43, 5773–5776 (2018).

Gu, Y. C. et al. Holographic waveguide display with large field of view and high light efficiency based on polarized volume holographic grating. IEEE Photonics J. 14, 7003707 (2022).

Li, Y. N. Q., Zhan, T. & Wu, S. T. Flat cholesteric liquid crystal polymeric lens with low f-number. Opt. Express 28, 5875–5882 (2020).

Yin, K., He, Z. Q. & Wu, S. T. Reflective polarization volume lens with small f-number and large diffraction angle. Adv. Optical Mater. 8, 2000170 (2020).

Li, Y. N. Q. et al. Broadband cholesteric liquid crystal lens for chromatic aberration correction in catadioptric virtual reality optics. Opt. Express 29, 6011–6020 (2021).

Li, Y. N. Q. et al. Dual-depth augmented reality display with reflective polarization-dependent lenses. Opt. Express 29, 31478–31487 (2021).

Wang, Y. J. et al. Varifocal augmented reality adopting electrically tunable uniaxial plane-parallel plates. Opt. Express 28, 23023–23036 (2020).

Kumar, M. B. et al. Compact vari-focal augmented reality display based on ultrathin, polarization-insensitive, and adaptive liquid crystal lens. Opt. Lasers Eng. 128, 106006 (2020).











Yin, K. et al. Doubling the FOV of AR displays with a liquid crystal polarization-

dependent combiner. Opt. Express 29, 11512–11519 (2021).

Shi, Z. J., Chen, W. T. & Capasso, F. Wide field-of-view waveguide displays enabled by polarization-dependent metagratings. In Proc. SPIE 10676, Digital Optics for Immersive Displays. 1067615 (SPIE, France, 2018).

Cakmakci, O. & Rolland, J. Design and fabrication of a dual-element off-axis near-eye optical magnifier. Opt. Lett. 32, 1363–1365 (2007).

Xiong, J. H. et al. Aberration-free pupil steerable Maxwellian display for augmented reality with cholesteric liquid crystal holographic lenses. Opt. Lett. 46, 1760–1763 (2021).

Shrestha, P. K. et al. Accommodation-free head mounted display with comfor- table 3D perception and an enlarged eye-box. Research 2019, 9273723 (2019).

Kim, S. B. & Park, J. H. Optical see-through Maxwellian near-to-eye display with an enlarged eyebox. Opt. Lett. 43, 767–770 (2018).

Jang, C. et al. Holographic near-eye display with expanded eye-box. ACM Trans. Graph. 37, 195 (2018).

Kim, J. et al. Foveated AR: dynamically-foveated augmented reality display.

ACM Trans. Graph. 38, 99 (2019).

Xiong, J. H. et al. Breaking the field-of-view limit in augmented reality with a scanning waveguide display. OSA Contin. 3, 2730–2740 (2020).




---


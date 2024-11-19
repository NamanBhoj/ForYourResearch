import React, { useState, useEffect } from 'react';
import MarkdownViewer from './MarkdownViewer';
import { HiOutlineChevronRight, HiChevronDown } from 'react-icons/hi';
import { FaArrowDown } from 'react-icons/fa';

// Define a set of colors for each RQ
const colorPalette = [
  'text-red-500', // RQ1 color
  'text-green-500', // RQ2 color
  'text-blue-500', // RQ3 color
  'text-yellow-500', // RQ4 color
  'text-purple-500', // RQ5 color
  'text-pink-500', // RQ6 color
  // Add more colors as needed
];

const App = () => {
  const [mdContent, setMdContent] = useState('');
  const [rqData, setRqData] = useState([]);

  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedMarkdownContent = sessionStorage.getItem('markdownContent');
    const storedRqData = sessionStorage.getItem('rqData');
    console.log(storedMarkdownContent);

    if (storedMarkdownContent) setMdContent(storedMarkdownContent);
    if (storedRqData) setRqData(JSON.parse(storedRqData));

    // Clean up sessionStorage
    return () => {
      sessionStorage.removeItem('markdownContent');
      sessionStorage.removeItem('rqData');
    };
  }, []);
  console.log(rqData);
  //   const markdownContent = `
  // ## A Survey of Augmented Reality

  // <span id="rq1-text-1">Abstract text goes here.</span>

  // ---

  // This paper surveys the field of Augmented Reality...

  // ---

  // ## Definition

  // <span id="rq2-text-1">AR can be thought of as the "middle ground"...</span>
  // `;
  const markdownContent = `
Communication

Communication technologies with high performance information, including fifth generation wireless system (5G) and wireless fidelity (Wi-Fi), have the advantages of high data rates and low latency. These are the basis for XR technologies, including other emerging technologies, such as the Internet of wearable sensors, big data, 3D medical images and holograms, cloud computing, and AI, which can combine organically with 5G [16,24]. Furthermore, 5G network-based telerobotic spine surgery has been performed due to the aforementioned digital transformation and progress in robot-assisted spine surgery [25].

Editing

The use of AI in the editing of high-performance information is already essential for image reconstruction. Clinicians have widely used 3D medical images edited by AI and high-performance communication technology. These images vividly reproduce the human body structure, pathophysiology, and clinical scenes with a sense of realism. This informa-





tion could support medical treatment, including navigation surgery, education of medical students and residents, patient explanation, rehabilitation, and telemedicine [26,27]. Three- dimensional medical images and holograms are more practical than conventional models such as a 3D-printed models, as they allow clinicians to move objects around or remove certain areas. They can also be easily obtained by inputting high-performance information.

Viewing

The most common way to view 3D medical images edited with the above-mentioned high-performance information is with a high-resolution display, which can take the form of either a traditional monitor or a head-mounted display (HMD) [28–30]. When combined with a 4 K or 8 K ultra-high-definition monitor system, it can provide sharper and clearer streaming video, providing detailed content that resolves information beyond the retina and helps to make a visual diagnosis [16]. Recent improvements in the medical image analysis and visualization equipment have led to the use of 3D medical images and holograms in clinical practice [5]. With the evolution of HMD, XR technology has been integrated into HMD systems. Three-dimensional holograms can be displayed on HMD; VR with HMD has been used to educate and guide trainees in pedicle screw fixation and has shown greater accuracy in comparison to traditional teaching methods [31,32]. AR with HMD has been primarily used to facilitate intraoperative navigation/guidance in MISS [33,34]. With the introduction of AR/MR with HMD, an omnidirectional hologram is projected onto the surgeon’s field of view, allowing the surgeon to concentrate on the surgical field without returning to the monitor [7].

The COVID-19 Pandemic

The social-distancing guidelines in response to the COVID-19 pandemic have acceler- ated digital transformation, creating a context that will continue to drive innovation and technological adoption. Similarly, the COVID-19 pandemic has brought about significant changes in medical education for residents and students around the world, disruptions to medical education, a reduction in elective operations, and restrictions on physical partici- pation in workshops or conferences [35]. Thus, the use of technology to maintain medical treatment and education has become more rapid and innovative than ever before. As a result, many healthcare organizations have been increasingly interested in XR technology: patient care and management, the education of residents and medical students (i.e., on- line lectures, remote access to teaching ward rounds by XR technology [36], preoperative planning and simulation, and remote rehabilitation (telerehabilitation) [17,36,37].

With the continuous development and advancement of the abovementioned digi- tal transformation, tele-medicine has become an essential part of medical information technology construction. In addition to isolation from social contact and interaction by stay-at-home policies, medical students have suffered from depression [38]. Therefore, telemedicine may be important not only for patients but also for medical students. Until vaccines are available or herd immunity is achieved, a repeat of the COVID-19 pandemic is expected, and no significant reversal of the digital trends is expected in the post-pandemic environment. Thus, we need to continue to pay attention to XR technology.

Minimally Invasive Spine Surgery (MISS)

Over the past 20 years, there has been an explosion of new MISS methods, which often require new skills and tools [7,39]. Advances in XR technology have facilitated the development of new skills and tools in spine surgery. MISS has become a common technique, bringing many benefits to both surgeons and patients; however, these techniques rely heavily on indirect visualization and/or navigation guidance [40–42]. XR technology, which can visualize the anatomy and guide the surgeon as precisely as intraoperative navigation, has been implemented in the MISS field. On the other hand, the narrow surgical field in MISS and the difficulty in obtaining accurate spatial awareness during surgery are factors that hinder the education and acquisition of surgical skills. In addition,





MISS surgery is associated with a high rate of radiation exposure because surgeons must rely on X-ray images to confirm the instrumentation accuracy [43,44].

It has been reported that the usefulness of XR technology in spine surgery includes high-precision surgery, reduced radiation, and a shortened surgical time.

Therefore, in MISS, XR technology has played an increasingly important role in education and treatment [39].


---

## Technologies Supporting the Digital Transformation of Spine Medicine

As discussed in Section 2, many XR technologies and devices have supported digital transformation in spine medicine. The following is a supplementary description of some particularly interesting technologies and devices.

3D Medical Images and Holograms

The areas of application of 3D medical images and holograms are diverse and promis- ing. They include education, patient follow-up and informed consent, and surgical simula- tion/navigation.

Image Capture in Medical Application Systems Using XR Technology Conventional two-dimensional imaging modalities mainly include X-rays, CT, and

MRI, which often require years of clinical experience and a high degree of spatial imagina- tion for an accurate diagnosis. For medical students and residents, the lack of an accurate understanding of the three-dimensional positioning of the organs makes it difficult to assess preoperative images and understand surgical techniques. Case-specific 3D holograms can be used as a new educational tool to improve the competency of medical students and resi- dents [44], and as a tool for patient education [45]. Since XR technology is computer-based, it can perform learning activities that would be impossible in the real world. For example, students can already use Anatomage TABLE™ to observe 3D dissection to the center of a cell in VR. In this way, software development can provide an engaging learning experience that allows for a deeper understanding of complex concepts [46].

Surgeons frequently require the real-time estimation of 3D data from 2D images, and the application of XR technology in spine surgery could facilitate this task, improv- ing patient safety and surgical efficiency. Medical images in spine surgery—even 3D- reconstructed images—can only be viewed on a flat monitor, which can lead to inaccurate spatial perception. Therefore, the intraoperative use of 3D holograms with high spatial awareness is desirable, 
`;

  // const rqData = [
  //   { RQ1: ['Abstract text goes here'] },
  //   {
  //     RQ2: [
  //       'AR can be thought of as the "middle ground"',
  //       'This is another sample text for RQ3',
  //       'This is another sample text for RQ3',
  //       'This is another sample text for RQ3',
  //       'This is another sample text for RQ3',
  //       'This is another sample text for RQ3',
  //     ],
  //   },
  //   {
  //     RQ3: [
  //       '3D Medical Images and Holograms',
  //       'Image Capture in Medical Application Systems Using XR Technology Conventional two-dimensional imaging modalities mainly include X-rays, CT, and',
  //     ],
  //   }, // Add more RQs here
  //   { RQ4: ['This is another sample text for RQ3'] }, // Add more RQs here    { RQ3: ['This is another sample text for RQ3'] }, // Add more RQs here
  //   { RQ5: ['This is another sample text for RQ3'] }, // Add more RQs here
  // ];

  // Function to modify the markdown content by adding ids and colors for each text piece
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
  };

  const modifyMarkdownContent = (markdownContent, rqData) => {
    let modifiedContent = markdownContent;
    rqData.forEach((rq, index) => {
      const rqColor = colorPalette[index % colorPalette.length]; // Get a color from the palette
      Object.entries(rq).forEach(([rqKey, texts]) => {
        texts.forEach((text, textIndex) => {
          const id = `${rqKey.toLowerCase()}-text-${textIndex + 1}`;
          const spanTag = `<span id="${id}" class="${rqColor} font-semibold">${text}</span>`;
          const escapedText = escapeRegExp(text); // Escape the text
          const regex = new RegExp(escapedText, 'g');
          modifiedContent = modifiedContent.replace(regex, spanTag);
        });
      });
    });
    return modifiedContent;
  };

  const modifiedMarkdownContent = modifyMarkdownContent(mdContent, rqData);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Dynamically initialize state to expand the first RQ by default
  const [expanded, setExpanded] = useState(() => {
    const initialExpandedState = {};
    rqData.forEach((rq, index) => {
      const rqKey = Object.keys(rq)[0]; // Get the key of the current RQ
      initialExpandedState[rqKey] = index === 0; // Expand the first RQ by default
    });
    return initialExpandedState;
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-8 space-x-12">
      {/* Left RQ selectors panel */}
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-2">
          Research Questions
        </h2>
        <div className="w-full space-y-6 bg-white p-6 shadow-xl rounded-lg sticky top-8 overflow-y-auto max-h-[80vh]">
          {rqData.map((rq, index) => {
            const rqKey = Object.keys(rq)[0];
            const rqColor = colorPalette[index % colorPalette.length]; // Get the color for this RQ
            return (
              <div key={index} className="space-y-6">
                {/* Accordion header */}
                <div
                  onClick={() => toggleExpand(rqKey)}
                  className={`flex justify-between items-center cursor-pointer ${rqColor} px-4 py-2 rounded-lg bg-gray-100`}
                >
                  <h3 className="text-xl font-semibold">{rqKey}</h3>
                  {expanded[rqKey] ? (
                    <HiChevronDown className="text-black text-2xl" />
                  ) : (
                    <HiOutlineChevronRight className="text-black text-2xl" />
                  )}
                </div>

                {/* Accordion content */}
                <div
                  className={`space-y-2 ${
                    expanded[rqKey] ? 'block' : 'hidden'
                  }`}
                >
                  {rq[rqKey].map((text, idx) => (
                    <button
                      key={idx}
                      className={`w-full flex items-center px-4 py-3 bg-white text-${rqColor.slice(
                        5
                      )}-600 rounded-lg hover:bg-${rqColor.slice(
                        5
                      )}-100 focus:outline-none focus:ring-2 focus:ring-${rqColor.slice(
                        5
                      )}-300 transition-all`}
                      onClick={() =>
                        scrollToId(`${rqKey.toLowerCase()}-text-${idx + 1}`)
                      }
                    >
                      <FaArrowDown className="mr-2 text-gray-600" />
                      <span>{`Go to Text ${idx + 1}`}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Markdown viewer */}
      <div className="w-3/4 flex flex-col h-[90vh]">
        {/* Heading for Markdown Viewer */}
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Markdown Viewer
        </h2> */}

        {/* Markdown Content */}
        <div className="flex-1 overflow-y-auto">
          <MarkdownViewer markdown={modifiedMarkdownContent} />
        </div>
      </div>
    </div>
  );
};

export default App;

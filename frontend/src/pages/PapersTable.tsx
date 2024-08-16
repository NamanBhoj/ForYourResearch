import { useState } from 'react';
// import { useUserAuth } from '../contexts/AuthContext';
import KeywordInputField from '../components/KeywordInputField';
import KeywordChip from '../components/KeywordChip';
import axios from 'axios';
import RelevanceDropdown from '../components/RelevanceDropdown';
import QueryChip from '../components/QueryChip';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

export default function Library() {
  // const { user, signOut } = useUserAuth();
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [papers, setPapers] = useState<any[]>([]);
  const [paperRelevance, setPaperRelevance] = useState<Record<string, string>>(
    {}
  );
  const [paperObj, setPaperObj] = useState({
    total: 175648,
    offset: 0,
    next: 10,
    data: [
      {
        paperId: '6923b943d62ae0ca7cd6cfcb4c2b504a5701eecc',
        url: 'https://www.semanticscholar.org/paper/6923b943d62ae0ca7cd6cfcb4c2b504a5701eecc',
        title:
          'VRception: Rapid Prototyping of Cross-Reality Systems in Virtual Reality',
        abstract:
          'Cross-reality systems empower users to transition along the reality-virtuality continuum or collaborate with others experiencing different manifestations of it. However, prototyping these systems is challenging, as it requires sophisticated technical skills, time, and often expensive hardware. We present VRception, a concept and toolkit for quick and easy prototyping of cross-reality systems. By simulating all levels of the reality-virtuality continuum entirely in Virtual Reality, our concept overcomes the asynchronicity of realities, eliminating technical obstacles. Our VRception Toolkit leverages this concept to allow rapid prototyping of cross-reality systems and easy remixing of elements from all continuum levels. We replicated six cross-reality papers using our toolkit and presented them to their authors. Interviews with them revealed that our toolkit sufficiently replicates their core functionalities and allows quick iterations. Additionally, remote participants used our toolkit in pairs to collaboratively implement prototypes in about eight minutes that they would have otherwise expected to take days.',
        year: 2022,
      },
      {
        paperId: 'af83caf2ed02411fddec9881e277499192656819',
        url: 'https://www.semanticscholar.org/paper/af83caf2ed02411fddec9881e277499192656819',
        title:
          'Using Immersive Virtual Reality to Enhance Social Interaction Among Older Adults: A Cross-Site Investigation',
        abstract:
          'Abstract Background and Objectives Virtual reality (VR) applications are increasingly being targeted toward older adults as a means to maintain physical and cognitive skills and to connect with others, especially during the coronavirus disease 2019 era. Our knowledge about how older adults interact with VR is limited, however, since this is an emerging area and the related research literature is still rather slim. The current study focused specifically on older adults’ reactions to a social-VR environment, examining participant’s views about the possibility of meaningful interactions in this format, the impacts of social-VR immersion on mood and attitude, and features of the VR environment that affected these outcomes. Research Design and Methods The researchers designed a novel social-VR environment with features intended to prompt conversation and collaborative problem-solving among older adults. Participants were recruited from 3 diverse geographic locations (Tallahassee, FL; Ithaca, NY; and New York City, NY), and were randomly assigned to a partner from one of the other sites for social-VR interaction. The sample consisted of 36 individuals aged 60 and older. Results Reactions to the social VR were quite positive. Older adults reported high levels of engagement in the environment and perceived the social VR to be enjoyable and usable. Perceived spatial presence was found to be a central driver of positive outcomes. A majority of the participants indicated a willingness to reconnect with their VR partner in the future. The data also identified important areas for improvement that were of concern to older adults, such as the use of more realistic avatars, larger controllers more suited to aging hands, and more time for training/familiarization. Discussion and Implications Overall, these findings suggest that VR can be an effective format for social engagement among older adults.',
        year: 2023,
      },
      {
        paperId: 'dbec06a9c1ba7ccc2cc7c46882847f447cd8b7fa',
        url: 'https://www.semanticscholar.org/paper/dbec06a9c1ba7ccc2cc7c46882847f447cd8b7fa',
        title:
          'The Impact of Virtual Reality (VR) on Psychological and Physiological Variables in Children Receiving Chemotherapy: A Pilot Cross-Over Study',
        abstract:
          'Background: Virtual reality (VR) is a novel technology which provides a great opportunity to reduce some of the adverse effects of chemotherapy. Objective: Our study aims to investigate the effects of VR on the emotional states of paediatric oncology patients (n = 29, age: 10-18 years) receiving chemotherapy in a clinical setting with a crossover design. Methods: Children played a VR game in the experimental, and a mobile game in the control condition. Psychological (happiness, joy, fear, nervousness, anxiety, alertness, patience) and physiological variables (heart rate, systolic blood pressure, electrodermal activity), as well as pain and nausea were measured before and after the sessions. Data were analysed with multiple 2-way repeated measures ANOVA. Results: Joy (P = .003) and happiness (P \u003C .001) increased significantly when using VR, while there was no change in the control condition. Anxiety decreased (P = .002) and patience increased (P = .015) in both conditions, implying no additional benefit of VR. Children were more fearful before the VR session (P = .005), which disappeared after it. In case of physiological parameters, electrodermal activity decreased (P = .01) significantly after playing the mobile game, but not after the VR one. Conclusions: Our investigation point to the positive effects of VR on mood in paediatric oncology inpatients, thus, it could be used as a new tool in improving patients’ well-being during chemotherapeutical treatment. Our results indicate that VR is an effective tool in improving patients’ well-being during chemotherapeutic treatment.',
        year: 2023,
      },
      {
        paperId: '547c72f1e8ad730468c75addbda7a3c58c959379',
        url: 'https://www.semanticscholar.org/paper/547c72f1e8ad730468c75addbda7a3c58c959379',
        title:
          'Innovating Industrial Training with Immersive Metaverses: A Method for Developing Cross-Platform Virtual Reality Environments',
        abstract:
          'The metaverse has garnered significant attention for its potential to provide engaging and social experiences in virtual reality. Despite substantial investment and interest from industry, there remains a lack of academic research on the development and implementation of metaverses for industrial training. Notably, research indicates that virtual reality training is, on average, four times faster than classroom-based training. This study proposes a method for developing immersive metaverses for industrial training, leveraging specialized tools like Epic Games’ Unreal Engine software version 4.27.2. To assess the efficacy of this method, a cross-platform metaverse was developed, and a questionnaire was administered to game developers. The results indicate that even junior developers and those with limited experience can comprehend the method, suggesting that it is possible to develop immersive virtual worlds with an emphasis on professional training even without prior experience with 3D modeling or third-party licensing.',
        year: 2023,
      },
      {
        paperId: 'ece218c827d8f0e17e515ac000cd1200edc73829',
        url: 'https://www.semanticscholar.org/paper/ece218c827d8f0e17e515ac000cd1200edc73829',
        title:
          'Heart Rate Variability during Virtual Reality Activity in Individuals after Hospitalization for COVID-19: A Cross-Sectional Control Study',
        abstract:
          '(1) Background: COVID-19 can lead to many complications, including cardiorespiratory complications and dysautonomia. This can be assessed by heart rate variability (HRV), which reflects the autonomic nervous system. There are different possibilities for physical rehabilitation after COVID, one of which that has been growing fast is the use of Virtual reality (VR) for rehabilitation. VR may represent an innovative and effective tool to minimize deficits that could lead to permanent disabilities in patients of outpatient rehabilitation services. The aim of this protocol is to establish whether practicing a task using a VR game with body movements influences physiological variables, such as heart rate, HRV, oxygen saturation, blood pressure, and perceptual variables during exercise in individuals post-hospitalization for COVID. (2) Methods: This cross-sectional study evaluated individuals divided into two groups, a post-hospitalization for COVID-19 group and a healthy control group. Subjects underwent one session of a VR task, and physiological variables, including HRV, were measured during rest, VR activity, and recovery. In addition, considering the influence of age in HRV and the impact of COVID-19, we divided participants by age. (3) Results: In all HRV indices and in both groups, an increase in sympathetic and a decrease in parasympathetic activity were found during VR. Additionally, the older post-COVID-19 group performed worse in non-linear indices, peripheral oxygen saturation, and rating of perceived exertion (RPE). (4) Conclusions: The VR game positively affects physiological variables and can therefore be utilized as a secure physical activity in both healthy individuals and individuals after hospitalization for COVID-19. COVID-19 affects the autonomic nervous system of older patients’ post-hospitalization, which may be partly due to a higher BMI and the reduced exercise capacity in this population, affecting their ability to perform exercise activities. Other important observations were the higher RPE in COVID-19 patients during and after exercise, which may reflect altered physiological and autonomic responses. Taken together with the high reporting of fatigue after COVID-19, this is an important finding, and considering that RPE is usually lower during VR exercise compared to non-VR strengthens the potential for the use of VR in COVID-19 patients.',
        year: 2023,
      },
      {
        paperId: '23c8d6dbde4d026f5936a0e8d2c0b00e3861a3bc',
        url: 'https://www.semanticscholar.org/paper/23c8d6dbde4d026f5936a0e8d2c0b00e3861a3bc',
        title:
          'Blending Spaces: Cross-Reality Interaction Techniques for Object Transitions Between Distinct Virtual and Augmented Realities',
        abstract:
          'Cross-Reality (CR) involves interaction between different modalities and levels of immersion such as Virtual and Augmented Reality, as we explore in this paper. Whereas previous work assumed similarity between their respective Virtual and Augmented Environment (VE and AE), we explore the case in which VE and AE are distinct. This gives rise to novel and critical problems, such as how to visualise and interact with the other environment. In this context we investigate the fundamental interaction of transitioning an object across environments, to which we contribute five interaction techniques. Two are inspired by literature: Virtual Magic Lens and Binary Transition; while the other three are entirely novel: Auto Blended Space, Manual Blended Space - Button Transition and Manual Blended Space - Touch Transition. In a study evaluating the first four techniques, we found that participants (N=20) performed a CR object manipulation and transition task significantly faster using our Auto Blended Space technique. We then modified Manual Blended Space - Button Transition into Manual Blended Space - Touch Transition in response to these results, and reassessed the four techniques in a more complex object manipulation task (N=16). We found that this type of task was better suited to manual transition methods rather than automatic methods. Taken together, our final contribution are five blended space design factors, and timely Cross-Reality transition design guidelines.',
        year: 2022,
      },
      {
        paperId: 'f3f99131d47f19860347b7bb6b361477ff347dbb',
        url: 'https://www.semanticscholar.org/paper/f3f99131d47f19860347b7bb6b361477ff347dbb',
        title: 'Wearable Antennas for Virtual Reality Cross-Body Links',
        abstract:
          'Cross-body link refers to the wireless connection between two wearable devices when they are both worn or near the body, such as that of a virtual reality (VR) headset and its controllers. It is one of the most challenging wireless scenarios in terms of link budget, due to severe shadowing effects when controllers are placed at the back side of the body. This is especially true when the users are in an outdoor environment where there is less reflection from the surrounding. This paper investigates the wireless propagation mechanism, including line-of-sight, ground reflection, and creeping waves. Based on that, through simulation and measurement experiments, this work analyzes the impact of different antenna designs on the cross-body link of VR/AR devices, including one novel compact low-profile antenna named Distributed Monopole (DM), and two conventional antennas. Due to the polarization advantages, both the novel DM antenna and the patch antenna shows significantly better performance than the dipole antenna. The DM antenna also shows a 2–4 dB advantage over the patch antenna due to its omni-directional field pattern. Time-domain analysis and statistical approaches are suggested to fully characterize the cross-body link of VR/AR antennas and body propagation.',
        year: 2023,
      },
      {
        paperId: '2f44bff3ec1ff57ce316ca6a843f8738804867c3',
        url: 'https://www.semanticscholar.org/paper/2f44bff3ec1ff57ce316ca6a843f8738804867c3',
        title:
          'Impact of virtual reality immersion on customer experience: moderating effect of cross-sensory compensation and social interaction',
        abstract:
          "Purpose In order to encourage customers to try experience virtual tourism, researchers and practitioners pay more attention on how to improve customers' perception of authenticity.Design/methodology/approach Using the theory of cross-sensory compensation, through 4 experiments, this study examines the impact of social interaction and cross-sensory strategies on the relationship between virtual reality (VR) and improving customers' perception of authenticity and customer experience.Findings Through experimental research, this paper finds that (1) VR immersion has a significant positive impact on perception of authenticity, which in turn acts on customers' virtual tourism experience. (2) In addition, social interaction strengthens the relationship between VR immersion and customers' perception of authenticity. (3) The cross-sensory compensation has a positive effect on VR immersion to enhance customers' perception of authenticity.Originality/value The research conclusion provides a direction for further discussion on how to improve customers' perception of authenticity and provides theoretical guidance and reference for the virtual tourism industry.",
        year: 2023,
      },
      {
        paperId: '5d203226f2c25316e558cd713fa092374cbd3cb7',
        url: 'https://www.semanticscholar.org/paper/5d203226f2c25316e558cd713fa092374cbd3cb7',
        title:
          'Influence of Cross-Modal Correspondence between Auditory and Visual Stimuli on Vection Perception in Virtual Reality',
        abstract:
          'Vection is an optical illusion that enhances the sense of self-translation or self-rotation, augmenting a sense of moving or rotating without any physical movement. This sense is closely related to visually induced motion sickness (VIMS), a critical issue of current virtual reality (VR) applications. In order to find solutions for VIMS, lots of research is being conducted to explore vection. Since future VR content utilizes multiple senses to provide an immersive and comfortable experience, it is essential to explore the effect of multisensory stimuli on vection perception for detailed understanding. However, the effect of multisensory stimuli is not explored as much as uni-modal stimuli, and there could be various factors such as congruency, location, and combination methods. Therefore, in this paper, we experimented (n=32) with five intensity levels of visual stimuli and three congruence statuses of audio stimuli in VR. The result showed an interaction effect in vection detection time between congruent audio and no audio conditions. Also, it showed that the incongruent audio condition has augmented a stronger sense of vection than no audio condition. Based on the result, we propose the effect of multisensory stimuli and its rotation direction congruency on vection perception for future exploration.',
        year: 2023,
      },
      {
        paperId: 'de5806eede521ee6e57ddfc30d1c7389c5d10fb9',
        url: 'https://www.semanticscholar.org/paper/de5806eede521ee6e57ddfc30d1c7389c5d10fb9',
        title:
          'Virtual reality and critical care education in nursing: A cross-sectional study.',
        abstract: null,
        year: 2023,
      },
    ],
  });

  // const handleLogout = async () => {
  //   try {
  //     await signOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleAddKeyword = () => {
    if (keyword.trim() !== '') {
      const updatedKeywordList = [...keywordList, keyword];
      setKeywordList(updatedKeywordList);
      setQuery(updatedKeywordList.join(' '));
      setKeyword('');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/search/?query=${keywordList.join('+')}`
      );
      setPapers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching papers:', error);
    }
  };

  const handleDelete = (chip: string) => {
    const updatedKeywordList = keywordList.filter(
      (keyword) => keyword !== chip
    );
    setKeywordList(updatedKeywordList);
    setQuery(updatedKeywordList.join(' '));
  };

  const handleDeleteQuery = () => {
    setKeywordList([]);
    setQuery('');
  };

  const handleRelevanceChange = (paperId: string, relevance: string) => {
    setPaperRelevance((prevRelevance) => ({
      ...prevRelevance,
      [paperId]: relevance,
    }));
  };

  const handleSortByRelevance = (): void => {
    type Relevance = 'Relevant' | 'Uncertain' | 'Irrelevant' | 'Unselected';
    const sortOrder = {
      Relevant: 0,
      Uncertain: 1,
      Irrelevant: 2,
      Unselected: 3,
    };

    const sortedData = paperObj.data.sort((a, b) => {
      const relevanceA = (paperRelevance[a.paperId] ||
        'Unselected') as Relevance;
      const relevanceB = (paperRelevance[b.paperId] ||
        'Unselected') as Relevance;

      return sortOrder[relevanceA] - sortOrder[relevanceB];
    });

    setPaperObj((prevPaperObj) => ({
      ...prevPaperObj,
      data: sortedData,
    }));
  };

  return (
    <>
      {/* SEARCH CARD */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-center">
          <div className="max-w-lg w-full flex items-center space-x-4">
            <div className="divide-y divide-slate-200 overflow-hidden rounded-lg shadow border border-slate-300 w-full">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <KeywordInputField
                      keyword={keyword}
                      setKeyword={setKeyword}
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={handleAddKeyword}
                  >
                    Add keyword
                  </button>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {keywordList.map((keyword, index) => (
                    <KeywordChip
                      key={index}
                      text={keyword}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-grow">
                      <div className="flex flex-col space-y-2">
                        <span className="text-sm font-medium text-gray-600">
                          Search query:
                        </span>
                        <QueryChip
                          handleDelete={handleDeleteQuery}
                          text={query}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}

      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              {/* add text for table info */}
            </div>
            <div className="mt-8 flow-root">
              <div className="border rounded-lg shadow overflow-auto max-h-[700px] max-w-full">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-slate-200 sticky top-0 z-10">
                      <tr>
                        <th
                          scope="col"
                          className="py-2 pl-3 pr-2 text-left text-sm font-semibold text-slate-900 sm:pl-4"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="hidden px-2 py-2 text-center text-sm font-semibold text-slate-900 sm:table-cell max-w-[200px] truncate"
                        >
                          Abstract
                        </th>
                        <th
                          scope="col"
                          className="hidden px-2 py-2 text-center text-sm font-semibold text-slate-900 lg:table-cell max-w-[100px] truncate"
                        >
                          Year
                        </th>
                        <th
                          scope="col"
                          className="hidden px-2 py-2 text-center text-sm font-semibold text-slate-900 lg:table-cell max-w-[100px] truncate"
                        >
                          <div className="flex items-center justify-center">
                            Relevance
                            <ChevronDownIcon
                              onClick={handleSortByRelevance}
                              aria-hidden="true"
                              className="cursor-pointer hover:bg-slate-100 hover:rounded-lg hover:text-slate-900 ml-1 h-5 w-5 text-slate-400"
                            />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-300 bg-slate-50">
                      {paperObj.data.map((paper) => (
                        <tr
                          key={paper.paperId}
                          className="hover:bg-slate-50 transition-colors duration-150"
                        >
                          <td className="py-3 pl-3 pr-2 text-sm font-medium text-slate-900 sm:pl-4 max-w-[100px] align-top">
                            <a
                              className="font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {paper.title}
                            </a>
                          </td>
                          <td className="hidden px-2 py-3 text-sm text-black sm:table-cell max-w-[200px]">
                            {paper.abstract}
                          </td>
                          <td className="hidden text-center px-2 py-3 text-sm text-black lg:table-cell max-w-[100px] truncate align-top">
                            {paper.year}
                          </td>
                          <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                            <RelevanceDropdown
                              relevance={
                                (paperRelevance[paper.paperId] as any) ||
                                'Unselected'
                              }
                              onRelevanceChange={(newRelevance: any) =>
                                handleRelevanceChange(
                                  paper.paperId,
                                  newRelevance
                                )
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

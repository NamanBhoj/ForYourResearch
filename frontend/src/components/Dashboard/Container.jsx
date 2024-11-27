import { useEffect, useState } from 'react';
import { useUserAuth } from '../../contexts/AuthContext';
import QueryInputField from './QueryInputField';
import axios from 'axios';
import RelevanceDropdown from '../Shared/RelevanceDropdown';
import SortByDropdown from '../Shared/SortByDropdown';
import Loader from '../Shared/Loader';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import SearchTable from './SearchTable';
import ScreeningTable from './ScreeningTable';
import ResearchQuestionTable from './ResearchQuestionTable';
import AnswersTable from './AnswersTable';

import StatsTable from './StatsTable';

export default function Library() {
  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;

  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [papers, setPapers] = useState([]);
  const [totalNumberOfPapers, setTotalNumberOfPapers] = useState(0);
  const [activeTable, setActiveTable] = useState('search');
  const [paperSources, setPaperSources] = useState({});
  const [abstractScreenedPapers, setAbstractScreenedPapers] = useState([]);
  const [fullTextScreeningDone, setFullTextScreeningDone] = useState(false);
  const [fullTextScreenedResults, setFullTextScreenedResults] = useState(false);

  const { user } = useUserAuth();

  useEffect(() => {
    const fetchSavedSearchData = async () => {
      try {
        const response = await axios.get(
          `${lambdaUrl}/getCurrentSearchResults/?uid=${user?.uid}`
        );
        const json = response.data;
        console.log(json);
        setPapers(json);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchSavedSearchData();
  }, [user?.uid]);

  const handleSearch = async () => {
    setSearching(true);
    const response = await axios.get(
      `${lambdaUrl}/search/?query=${query}&limit=100`
    );

    // This is to get the body of the response from the API
    // The body of the response will only contain an array of the papers now so can directly map it to display
    const json = response.data;
    console.log(json['papers']);
    // console.log('YOU ARE LOGGING ME')
    // console.log(json['papers'][0]['year'])

    // Setting the papers array that will be displayed in the table
    setPapers(json['papers']);
    setPaperSources(getPaperSources(json['papers']));
    console.log(getPaperSources(json['papers']));
    console.log(papers);
    await handleSaveCurrentData(json['papers']);

    setSearching(false);
  };

  const getPaperSources = (papers) => {
    let res = {};
    papers.forEach((paper) => {
      const url = paper.openAccessPdf?.url;
      if (url != null) {
        try {
          const parsedUrl = new URL(url);
          const hostname = parsedUrl.hostname;
          const domain = hostname
            .replace(/^www\./, '')
            .split('.')
            .slice(0, -1)
            .join('.');
          const obj = { domain, hostname };
          const key = JSON.stringify(obj);
          res[key] = (res[key] || 0) + 1;
        } catch (error) {
          console.error(`Invalid URL: ${url}`);
        }
      }
    });
    console.log(res);
    return res;
  };

  const handleRelevanceChange = (paperId, relevance) => {
    const updatedPapers = papers.map((paper) => {
      if (paper.paperId === paperId) {
        return { ...paper, Relevance: relevance };
      }
      return paper;
    });
    setPapers(updatedPapers);
  };

  const sortRelevantFirst = () => {
    handleSortByRelevance({
      Relevant: 0,
      Uncertain: 1,
      Irrelevant: 2,
      Untagged: 3,
    });
  };

  const sortUncertainFirst = () => {
    handleSortByRelevance({
      Relevant: 1,
      Uncertain: 0,
      Irrelevant: 2,
      Untagged: 3,
    });
  };

  const sortIrrelevantFirst = () => {
    handleSortByRelevance({
      Relevant: 2,
      Uncertain: 1,
      Irrelevant: 0,
      Untagged: 3,
    });
  };

  const handleSortByRelevance = (sortOrder) => {
    const sortedPapers = [...papers].sort((a, b) => {
      const relevanceA = a.Relevance || 'Untagged';
      const relevanceB = b.Relevance || 'Untagged';

      return sortOrder[relevanceA] - sortOrder[relevanceB];
    });

    setPapers(sortedPapers);
  };

  const handleSaveToLibrary = async () => {
    setSaving(true);

    const json = {
      uid: user?.uid,
      data: papers,
      searchQuery: query,
    };
    console.log('LOGGING THE QUERY');
    await axios.post(`${lambdaUrl}/saveToLibrary`, json);
    setSaving(false);
    setShowNotification(true);
  };

  const handleSaveCurrentData = async (papers) => {
    const json = {
      uid: user?.uid,
      data: papers,
      searchQuery: query,
    };
    await axios.post(`${lambdaUrl}/saveCurrentSearchResults`, json);
  };

  const getNumberOfTopPapers = () => {
    const hasPaperUrl = (paper) => {
      if (paper.openAccessPdf?.url.length > 0) {
        return paper;
      }
    };

    const papersWithLink = papers.filter(hasPaperUrl);
    return papersWithLink.length;
  };

  const dummyPapers = [
    {
      'A Scoping Survey on Cross-reality Systems': {
        'what future work can be done?': [
          'We conclude with research challenges and opportunities for future investigations of cross-reality systems.',
          'In the future, this category of devices will form the ultimate cross-reality systems.',
          'To address the increasing complexity of cross-reality systems, we conclude this section by discussing novel prototyping methods of cross-reality systems as an opportunity to make the field more inclusive and allow for quicker iterations (see Section 7.5).',
          'we recommend investigating visualization methods that enable one to convey the transitions taking place within a cross-reality system.',
          'we recommend investigating visualization methods; nevertheless, we emphasize that such visualizations need to consider the different actualities of the users involved in Type 3 cross-reality systems.',
          'we believe that the tendency of immersive VR to blend out the visual information from the real world while auditory or haptic sensations remain perceivable inherently offers more conflict potential, which previous work has aimed to address. Nonetheless, previous work has demonstrated that AR suffers from similar problems—just to a smaller degree [140, 141]. Still, neglecting these issues can cause severe problems, especially when cross-reality systems are operated in more dangerous environments (e.g., while navigating traffic [136]). Hence, more investigations into head-mounted AR systems are needed, especially as these systems already provide the possibility to communicate more easily with bystanders, but the digital content is hidden similar to VR systems.',
          'In the future, more research is needed to systematically investigate which aspects of users’ real environments need to be introduced to VR experiences and, more importantly, when and how users transition to AV with the goal to incorporate these aspects into their experiences.',
          'We see numerous research opportunities here that can help to shape the understanding of cross-reality systems and their effects on all involved users.',
          'Here, we address current shortcomings and propose future research perspectives, including visualization and prototyping methods for these systems.',
        ],
      },
    },
    {
      'VRception: Rapid Prototyping of Cross-Reality Systems in Virtual Reality':
        {
          'what future work can be done?': [
            'Jansen et al. [31] outlined that one of their future aims is to reduce their prototype’s weight.',
            'P2 and P6 asked for a more realistic real-world simulation using a LIDAR scanner or a 360 recording to address their concern over distinguishability of the VR worlds.',
            'Other feature requests include hand tracking (P2, P4), shadows (P2), event-driven transitions (P6), and object alignment (P6).',
            'They further commented that improvements in hardware and software technology would be possible in the future (P1, P4 - P6).',
            'We identified five opportunities and implications for future work in cross-reality system and interaction research and practice, which we will outline in the following paragraphs.',
            'For the future, we envision two research directions that would benefit our approach: 1) virtual clones of existing hardware, and 2) comparative evaluations that compare prototypes developed with VRception to their real-world implementations as discussed in the limitations section.',
            'We conclude our work by outlining research opportunities and their implications for the future of cross-reality research. We argue that cross-reality systems and interactions should be addressed further in future prototyping tools since they are becoming a fundamental type of interaction for augmented and virtual reality applications.',
          ],
        },
    },
    {
      'Cross-Reality for Extending the Metaverse: Designing Hyper-Connected Immersive Environments with XRI':
        {
          'what future work can be done?': [
            'The problems of the current metaverse platforms have yet to address these models of connection with the physical space in depth, and this work has the potential to elucidate the disconnect problem and to lay the groundwork for future exploration toward seamless immersive engagements in metaverse applications.',
            'future hybrid XRI applications are being developed for applied situations, like education, cyber security, and marketing [2].',
            'It is noted that evaluating this experience remains for future testing with users.',
            'The current work centered on the design and prototyping of these systems, and a more rigorous evaluation of these concepts is left as a direction for future research.',
            'For instance, more experimentation is needed to clearly show how cross-reality benefits users.',
            'Further, this work only considers a single-user cross-reality scenario, and multi-user explorations would be beneficial for proving the concept across different scenarios.',
            'New forms of representing changes in the physical and virtual environment and new design approaches are needed for users regardless of whether they are physically present, or virtually telepresent, across the entire cross-reality spectrum.',
            'Additionally, as the current work relies on subjective evaluation, a more thorough user evaluation is required to objectively assess the benefits and significance of this cross-reality research, as well as user-experience and performance.',
            'It is also noted that new head-mounted displays and cross-reality hardware also remains to be incorporated into the framework, which would address several limitations related to visibility and immersion (i.e., use of color-passthrough HMD’s versus the black & white passthrough HMD used in this work).',
            'Lastly, an exploration of how to optimize the anchoring and placement of mixed reality objects without obstructing the user’s field of view is also an important question for further research.',
            'D. Gursoy, S. Malodia, and A. Dhir. The metaverse in the hospitality and tourism industry: An overview of current trends and future research directions. Journal of Hospitality Marketing & Management, pp. 1–8, 2022.',
            'D. Jo and G. J. Kim. AR enabled IoT for a smart and interactive environment: A survey and future directions. Sensors (Switzerland), 19(19), 2019. doi: 10.3390/s19194330',
            'D. Jo and G. J. Kim. Iot+ ar: pervasive and augmented environments for “digi-log” shopping experience. Human-centric Computing and Information Sciences, 9(1):1–17, 2019.',
          ],
        },
    },
  ];

  return (
    <>
      {/* SEARCH CARD */}
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full flex items-center space-x-4">
            <div className="divide-y divide-neutral-200 overflow-hidden rounded-lg shadow border border-neutral-300 w-full">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <QueryInputField keyword={query} setKeyword={setQuery} />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
                    onClick={handleSearch}
                    disabled={searching}
                  >
                    {searching ? 'Searching' : 'Search'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searching && (
        <div className="mt-12 flex justify-center">
          <Loader />
        </div>
      )}
      {/* TABLE */}

      {/* Container for the tables */}
      {papers && papers.length > 0 && (
        <div className="bg-white py-10">
          {/* toggle bar */}
          <div className="mx-auto max-w-7xl mb-4">
            <div className="flex justify-center">
              <div className="bg-neutral-100 rounded-lg border px-4 py-2 sm:px-6 lg:px-8 flex space-x-4">
                {/* <button
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    activeTable === 'stats'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-neutral-200 text-gray-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setActiveTable('stats')}
                >
                  Stats
                </button> */}
                <button
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    activeTable === 'search'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-neutral-200 text-gray-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setActiveTable('search')}
                >
                  Collection
                </button>
                <button
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    activeTable === 'screen'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-neutral-200 text-gray-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setActiveTable('screen')}
                >
                  Title & Abstract screening
                </button>
                <button
                  disabled={abstractScreenedPapers.length == 0}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    activeTable === 'rq'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-neutral-200 text-gray-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setActiveTable('rq')}
                >
                  Full Text Screening and Answers
                  <span className="ml-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    BETA
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* toggle bar */}
          <div className="mx-auto max-w-7xl">
            <div className="bg-neutral-100 rounded-lg border px-4 sm:px-6 lg:px-8">
              {activeTable === 'search' ? (
                <div>
                  <div className="mr-2 flex flex-row-reverse sm:flex sm:items-center">
                    <div className="mr-auto">
                      <span className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-m font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {`Top ${papers.length} papers`}
                        {totalNumberOfPapers > 0 &&
                          ` from a total of ${totalNumberOfPapers} papers`}
                      </span>
                    </div>
                  </div>
                  <SearchTable papers={papers} />
                </div>
              ) : activeTable === 'screen' ? (
                <ScreeningTable
                  papers={papers}
                  user={user}
                  searchQuery={query}
                  setAbstractScreenedPapers={setAbstractScreenedPapers}
                />
              ) : activeTable === 'stats' ? (
                <StatsTable paperSources={paperSources} />
              ) : activeTable === 'rq' ? (
                fullTextScreeningDone ? (
                  <AnswersTable
                    fullTextScreenedResults={fullTextScreenedResults}
                    searchQuery={query}
                    user={user}
                    // fullTextScreenedResults={dummyPapers}
                  />
                ) : (
                  <ResearchQuestionTable
                    papers={abstractScreenedPapers}
                    // papers={papers}
                    user={user}
                    searchQuery={query}
                    setFullTextScreeningDone={setFullTextScreeningDone}
                    setFullTextScreenedResults={setFullTextScreenedResults}
                  />
                )
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      <div className="flex justify-center items-center">
        <Transition
          show={showNotification}
          as="div"
          enter="transition duration-300 transform"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition duration-300 transform"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
          className="fixed top-0 inset-x-0 pt-4 z-50 ml-[20%]"
        >
          <div className="mx-auto max-w-lg rounded-lg bg-green-100 p-4 shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-6 w-6 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">
                  Papers have been stored to library!
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setShowNotification(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}

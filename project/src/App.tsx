import React, { useState } from 'react';
import { Calendar, FileText, Presentation, BookOpen, Home, FileCode, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import self from '../img/self.jpg'
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  

//   <div className="bg-[#000000] text-white p-4 rounded-md">
//   <h3 className="text-lg font-bold mb-2 text-[#CFA54D]">Current Course</h3>
//   <p className="mb-2">CSC 331/631: Advanced Computer Security</p>
//   <button 
//     onClick={() => setCurrentPage('schedule')}
//     className="text-white bg-[#9E7C2C] hover:bg-[#CFA54D] px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
//   >
//     <Calendar className="w-4 h-4 mr-2" />
//     View Course Schedule
//   </button>
// </div>


 const courseSchedule = [
      { date: "Jan 14, 2025", topic: "Course Introduction", slides: "intro-slides", presentation: "Welcome & Introduction to SE" },
      { date: "Jan 16, 2025", topic: "Introduction to SE", slides: "fundamentals", presentation: "Software & software engineering Concepts" },
      { date: "Jan 21, 2025", topic: "Software Process", slides: "Software Process I ", presentation: "Traditional Software Process" },
      { date: "Jan 23, 2025", topic: "Software Process", slides: "Software Process II", presentation: "Modern Software Process: Agil & DeOps" },
      { date: "Jan 28, 2025", topic: "Software ethics & Project release", slides: "practical", presentation: "Project Topic & Team Work" },
      { date: "Jan 30, 2025", topic: "Requirment Analysis", slides: "implementation", presentation: "Requirment Analysis: Overview" },
      { date: "Feb 4, 2025", topic: "Requirment Analysis: Use Case & Use case Modeling", slides: "best-practices", presentation: "Use Case Description in Requirement Analysis" },
      { date: "Feb 6, 2025", topic: "UML: Use Case Model", slides: "trends", presentation: "UML: Use Case Diagram + LucidChart" },
      { date: "Feb 11, 2025", topic: "UML: Use Case Model relationship", slides: "case-analysis", presentation: "Work with Real world Example" },
      { date: "Feb 13, 2025", topic: "UML: Domain Model I", slides: "project-planning", presentation: "From Class diagram to Domain model" },
      { date: "Feb 18, 2025", topic: "UML: Domain Model II & Project Planning", slides: "development", presentation: "Project Planning" },
      { date: "Feb 20, 2025", topic: "No Class", slides: "testing", presentation: "No Class" },
      { date: "Feb 25, 2025", topic: "UML: System Sequence Diagram", slides: "xx", presentation: "UML Sequence Diagram" },
      { date: "Feb 27, 2025", topic: "Software Design: Software Achitechture Design", slides: "security", presentation: "Guest Lecture: Lingxiang Wang" },
      { date: "Mar 4, 2025", topic: "Knowledge Sharing: AI in SE", slides: "integration", presentation: "AI in Software Engineering" },
      { date: "Mar 6, 2025", topic: "Midterm", slides: "deployment", presentation: "No Presentation" },
      { date: "Mar 11, 2025", topic: "Spring Break, no class", slides: "maintenance", presentation: "" },
      { date: "Mar 13, 2025", topic: "Spring Break, no class", slides: "scaling", presentation: "" },
      { date: "Mar 18, 2025", topic: "Software Desgin: Introduction", slides: "Design I", presentation: "Why We Need Software Design: Cohesion & Coupling" },
      { date: "Mar 20, 2025", topic: "Software Desgin principle: information hiding & abstraction, ", slides: "ux", presentation: "Coupling &  Information hiding" },
      { date: "Mar 25, 2025", topic: "Software Desgin", slides: "", presentation: "Modularity in Software Achitechture Design" },
      { date: "Mar 27, 2025", topic: "Software Desgin: UML sequence diagram", slides: "monitoring", presentation: "" },
      { date: "Apr 1, 2025", topic: "Software Design: Desgin pattern ", slides: "future", presentation: "" },
      { date: "Apr 3, 2025", topic: "Software Design: UI and Database ", slides: "", presentation: "Midterm presentation" },
      { date: "Apr 8, 2025", topic: "Software Testing I: concept", slides: "presentations-1", presentation: "" },
      { date: "Apr 10, 2025", topic: "Software Testing II: Tool & unit test", slides: "presentations-2", presentation: "write the test together" },
      { date: "Apr 15, 2025", topic: "Software Testing III", slides: "Testing Workflow in the Industry", presentation: "" },
      { date: "Apr 17, 2025", topic: "Software Security & Software Testing", slides: "", presentation: "" },
      { date: "Apr 22, 2025", topic: "Software Project managament & Course Conclusion", slides: "final-review", presentation: "Course Summary" },
      { date: "Apr 24, 2025", topic: "Final Project Demo", slides: "", presentation: "" }
    ];

  const renderHomePage = () => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="bg-[#f4f4f0] p-4 sm:p-6 rounded-lg border border-gray-200 shadow-md">
            <div className="w-40 h-40 sm:w-40 sm:h-60 mx-auto overflow-hidden rounded-md mb-4">
              <img 
                src={self} 
                alt="Wake Forest University Campus" 
                className="w-full h-full object-cover"
              />
            </div>
           
            <h3 className="text-xl font-bold text-[#000000] mb-2 text-center sm:text-left">Ying Zhang </h3>  <span className="flex items-center text-[#9E7C2C]">Assistant Professor</span>
            <div className="flex items-center text-[#9E7C2C] mb-2">
              {/* <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" /> */}
              {/* <span>Assistant Professor</span> */}
            </div>
            <p className="text-gray-700 mb-4 text-center sm:text-left">
              Department of Computer Science<br />
              Wake Forest University<br />
              Winston-Salem, NC
            </p>
            {/* <div className="flex items-center text-[#9E7C2C] mb-2">
              <GraduationCap className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>Ph.D. in Computer Science</span>
            </div> */}

            <div className="border-t border-gray-200 mt-4 pt-4">
              <p className="text-gray-600 text-sm">
                Email: ying <b>dot</b> zhang <b> at </b> wfu <b> dot </b> edu <br />
                Tel: 336-758-5153 <br/>
                Office: Room 236, Manchester Hall 
              </p>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
             <a className="inline-block bg-[#000000] text-white text-xs px-3 py-1 rounded-full mr-2 mb-2" href="https://github.com/NEUZhangy"> Github </a> 
             <a className="inline-block bg-[#9E7C2C] text-white text-xs px-3 py-1 rounded-full mr-2 mb-2" href = "https://scholar.google.com/citations?user=h6AkTC4AAAAJ&hl=en"> Google Scholar </a>
          </div>
          
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-[#000000] mb-4 font-serif">About Me</h2>
          <div className="space-y-4 mb-6">
          <p className="text-gray-700 mb-6">
            <p>  I am an Assistant Professor of Computer Science at Wake Forest University (WFU) since 2025. My research interests include Software Engineering and Software Security.
               My research work aims to bridge the gap between theoretical security knowledge and practical implementation. The research mission is to develop comprehensive security frameworks to 
               identify, demonstrate, and mitigate vulnerabilities in open-source software applications, with the goal of equipping developers with enhanced guidance for addressing code vulnerabilities effectively. </p>
             <p> Before joining WFU,  I worked as a Trust Engineer at LinkedIn from 2023 to 2024. I obtained my Ph.D. degree from Virginia Tech in 2023 under the supervision of
                <a href="https://people.cs.vt.edu/nm8247/"> Dr. Na Meng </a>  and  <a href="https://people.cs.vt.edu/danfeng/"> Dr. Daphne (Danfeng) Yao </a>. 
                I received my master's degree from Missouri University of Science and Technology in 2018 and bachelor's degree from Northeastern University (China) in 2016. 
                During my Ph.D. studies, I spent the summer of 2021 at ByteDance's Application Security team mentored by <a href="https://dingelish.com/"> Dr. Yu Ding </a>  and Dr. Peng Li.</p>
          </div>

          <h3 className="text-xl font-bold text-[#000000] mb-3 font-serif">Join the SE Lab</h3>     
           <div className="space-y-4 mb-6">     
          <blockquote>
          <p><h4>I am looking for self-motivated students, if you're interested, please email me with a bio about yourself, including your CV and transcript!</h4></p>
          </blockquote> 
          </div>

          
          <h3 className="text-xl font-bold text-[#000000] mb-3 font-serif"> News </h3> 

          <br/>

          <h3 className="text-xl font-bold text-[#000000] mb-3 font-serif">Current Students</h3> 
          <div className="border-t border-gray-200 mt-4 pt-4">
              <li> Ruicheng Miao, Spring 2025, WFU</li>
              
          </div>
          <br/>

          <h3 className="text-xl font-bold text-[#000000] mb-3 font-serif">Research Interests</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-[#f8f8f5] p-4 rounded-md border-l-4 border-[#CFA54D]">
              <h4 className="font-bold text-[#000000] mb-1 flex items-center">
                <ChevronRight className="w-5 h-5 text-[#CFA54D] flex-shrink-0" />
                <span>Mitigating Software Supply Chain Vulnerabilities</span>
              </h4>
              <li> Selected Publications:
                <a href="https://dl.acm.org/doi/10.1145/3639477.3639714">[ICSE24],</a> 
                <a href="https://www.computer.org/csdl/journal/ts/5555/01/09711933/1AUkpr06EQo">[TSE23],</a> 
                <a href="https://dl.acm.org/doi/pdf/10.1145/3524610.3527895">[ICPC22].</a>
              </li>
            </div>
            
            <div className="bg-[#f8f8f5] p-4 rounded-md border-l-4 border-[#CFA54D]">
              <h4 className="font-bold text-[#000000] mb-1 flex items-center">
                <ChevronRight className="w-5 h-5 text-[#CFA54D] flex-shrink-0" />
                <span>Exploring Large Language Models Vulnerabilities</span>
              </h4>
              <li> Selected Publications: 
                 <a href="https://dl.acm.org/doi/10.1145/3660799"> [ESEC/FSE24]</a>
                 <a href="https://www.ndss-symposium.org/ndss-paper/masterkey-automated-jailbreaking-of-large-language-model-chatbots/"> [NDSS24],</a>
                 <a href="https://dl.acm.org/doi/10.1145/3663530.3665021">[SEA4DQ]</a>
              </li>
            </div>
          </div>

         
          

        </div>
      </div>
    </div>
  );

  const renderSchedulePage = () => (
    <div className="bg-[#000000] text-white p-4 rounded-md">
    <h3 className="text-lg font-bold mb-2 text-[#CFA54D]">Current Course</h3>
    <p className="mb-2">CSC 331/631: Advanced Computer Security</p>
    <button 
      onClick={() => setCurrentPage('CSC331-schedule')}
      className="text-white bg-[#9E7C2C] hover:bg-[#CFA54D] px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
    >
      <Calendar className="w-4 h-4 mr-2" />
      View Course Schedule
    </button>
  </div>
  );

  const renderCSC331SchedulePage = () => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#000000] text-white">
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#CFA54D]" />
                  Date
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium uppercase tracking-wider">
                Topic
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#CFA54D]" />
                  Slides
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Presentation className="w-4 h-4 text-[#CFA54D]" />
                  Presentation
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courseSchedule.map((session, index) => (
              <tr 
                key={index} 
                className={index % 2 === 0 ? 'bg-white hover:bg-[#f4f4f0]' : 'bg-[#f8f8f5] hover:bg-[#f4f4f0]'}
              >
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {session.date}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  {session.topic}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm">
                  <a
                    href={`#${session.slides}`}
                    className="text-[#9E7C2C] hover:text-[#CFA54D] flex items-center gap-1 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Slides
                  </a>
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-700">
                  {session.presentation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


  const renderPublicationsPage = () => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl font-bold text-[#000000] mb-6 font-serif">Publications</h2>
      
      <div className="space-y-6">
        <div>
          {/* <h3 className="text-lg font-bold mb-2">Conference Proceedings</h3> */}
          <ul className="space-y-4">
            {[
              {
                title: "A Hitchhiker's Guide to Jailbreaking ChatGPT via Prompt Engineering",
                authors: "Yi Liu, Gelei Deng, Zhengzi Xu, Yuekang Li, Yaowen Zheng, <span class='font-bold'>Ying Zhang</span>*, Lida Zhao, Tianwei Zhang, Kailong Wang.",
                conference: "Proceedings of the 4th International Workshop on Software Engineering and AI for Data Quality in Cyber-Physical Systems/Internet of Things, 2024",
                link: "https://dl.acm.org/doi/abs/10.1145/3663530.3665021"
              },
              {
                title: "Glitch Tokens in Large Language Models: Categorization Taxonomy and Effective Detection",
                authors: "Yuxi Li, Yi Liu, Gelei Deng, <span class='font-bold'>Ying Zhang</span>, Wenjia Song, Ling Shi, Kailong Wang, Yuekang Li, Yang Liu, Haoyu Wang",
                conference: "The ACM International Conference on the Foundations of Software Engineering <span class='font-bold'>(ESEC/FSE) </span>, Porto de Galinhas, Brazil, 2024",
                link: "https://arxiv.org/pdf/2404.09894.pdf"
              },
              {
                title: "Broadly Enabling KLEE to Effortlessly Find Unrecoverable Errors in Rust",
                authors: "<span class='font-bold'>Ying Zhang</span>, Peng Li, Yu Ding, Wang Lingxiang, Dan Williams, Na Meng",
                conference: "46th International Conference on Software Engineering <span class='font-bold'>(ICSE) </span>, Software Engineering in Practice, Lisbon, Portugal, 2024",
                link: "https://dl.acm.org/doi/pdf/10.1145/3639477.3639714"
              },
              {
                title: "MASTERKEY: Automated Jailbreak Across Multiple Large Language Model Chatbots",
                authors: "Gelei Deng, Yi Liu, Yuekang Li, Kailong Wang, <span class='font-bold'>Ying Zhang</span>, Zefeng Li, Haoyu Wang, Tianwei Zhang, Yang Liu",
                conference: "The Network and Distributed System Security Symposium <span class='font-bold'> (NDSS)</span>, San Diego, CA, 2024",
                link: "https://arxiv.org/abs/2307.08715"
              },
              {
                title: "Automatic Detection of Java Cryptographic API Misuses: Are We There Yet?",
                authors: "<span class='font-bold'>Ying Zhang</span>, Mahir Kabir, Ya Xiao, Danfeng (Daphne) Yao, Na Meng",
                conference: "Transactions on Software Engineering <span class='font-bold'>  (TSE) </span>, vol. 49, no. 1, pp. 288-303, 2023",
                link: "https://www.computer.org/csdl/journal/ts/5555/01/09711933/1AUkpr06EQo"
              },
              {
                title: "Example-Based Vulnerability Detection and Repair in Java Code",
                authors: "<span class='font-bold'>Ying Zhang</span>, Ya Xiao, Mahir Kabir, Danfeng (Daphne) Yao, Na Meng",
                conference: "Proceedings of the 30th IEEE/ACM International Conference on Program Comprehension (ICPC), online, 2022",
                link: "https://dl.acm.org/doi/pdf/10.1145/3524610.3527895"
              },
              {
                title: "RWS - A Roulette Wheel Scheduler for Preventing Execution Pattern Leakage",
                authors: "<span class='font-bold'>Ying Zhang</span>, Luca Santinelli, Lingxiang Wang, Wei Jiang, Zhishan Guo",
                conference: "IEEE Real-Time and Embedded Technology and Applications Symposium <span class='font-bold'> (RTAS) </span>, BP Session, 2018",
                link: "#"
              },
              {
                title: "Cache-Aware Partitioned EDF Scheduling for Multi-Core Real-Time Systems",
                authors: "Zhishan Guo, <span class='font-bold'>Ying Zhang</span>, Lingxiang Wang, Zhenkai Zhang",
                conference: "The 38th IEEE Real-Time Systems Symposium <span class='font-bold'> (RTSS) </span>, BP Session, 2017",
                link: "#"
              },
              {
                title: "Integrating Cache-Related Pre-emption Delay into GEDF Analysis for Multiprocessor Scheduling with On-chip Cache",
                authors: "<span class='font-bold'>Ying Zhang</span>, Zhishan Guo, Lingxiang Wang, Haoyi Xiong, Zhenkai Zhang",
                conference: "IEEE Trustcom/BigDataSE/ICESS, 2017",
                link: "#"
              }
            ].map((pub, index) => (
              <li key={index} className="bg-[#f8f8f5] p-4 rounded-md">
                <p className="text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: `${pub.authors} \"${pub.title}.\" <em>${pub.conference}</em>` }}></p>
                <a href={pub.link} className="text-[#9E7C2C] hover:text-[#CFA54D] text-sm flex items-center w-max">
                  <FileCode className="w-4 h-4 mr-1" /> View Paper
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
  // const renderPublicationsPage = () => (
  //   <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-4 sm:p-6 md:p-8">
  //     <h2 className="text-2xl font-bold text-[#000000] mb-6 font-serif">Publications</h2>
      
  //     <div className="space-y-6">
  //       <div className="border-b border-gray-200 pb-6">
  //         <h3 className="text-lg font-bold mb-2">Selected Journal Publications</h3>
  //         <ul className="space-y-4">
  //           <li className="bg-[#f8f8f5] p-4 rounded-md">
  //             <p className="text-[#9E7C2C] font-medium mb-1">2024</p>
  //             <p className="text-gray-900 mb-2">Zhang, Y., et al. "Comprehensive Analysis of Supply Chain Attacks in Open Source Ecosystems." <em>Journal of Cybersecurity</em>, 12(3), 45-62.</p>
  //             <a href="#" className="text-[#9E7C2C] hover:text-[#CFA54D] text-sm flex items-center w-max">
  //               <FileCode className="w-4 h-4 mr-1" /> View Paper
  //             </a>
  //           </li>
  //           <li className="bg-[#f8f8f5] p-4 rounded-md">
  //             <p className="text-[#9E7C2C] font-medium mb-1">2023</p>
  //             <p className="text-gray-900 mb-2">Zhang, Y., & Johnson, R. "Security Implications of Large Language Models in Critical Infrastructure." <em>IEEE Transactions on Dependable and Secure Computing</em>, 20(4), 1123-1140.</p>
  //             <a href="#" className="text-[#9E7C2C] hover:text-[#CFA54D] text-sm flex items-center w-max">
  //               <FileCode className="w-4 h-4 mr-1" /> View Paper
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
        
  //       <div>
  //         <h3 className="text-lg font-bold mb-2">Conference Proceedings</h3>
  //         <ul className="space-y-4">
  //           <li className="bg-[#f8f8f5] p-4 rounded-md">
  //             <p className="text-[#9E7C2C] font-medium mb-1">2024</p>
  //             <p className="text-gray-900 mb-2">Zhang, Y., Smith, J., & Davis, A. "DefendLLM: A Framework for Detecting and Mitigating Prompt Injection Attacks." <em>Proceedings of the 45th IEEE Symposium on Security and Privacy</em>, San Francisco, CA.</p>
  //             <a href="#" className="text-[#9E7C2C] hover:text-[#CFA54D] text-sm flex items-center w-max">
  //               <FileCode className="w-4 h-4 mr-1" /> View Paper
  //             </a>
  //           </li>
  //           <li className="bg-[#f8f8f5] p-4 rounded-md">
  //             <p className="text-[#9E7C2C] font-medium mb-1">2023</p>
  //             <p className="text-gray-900 mb-2">Zhang, Y., & Wilson, T. "SupplyGuard: Automated Detection of Malicious Code Injections in Package Registries." <em>Proceedings of the ACM Conference on Computer and Communications Security (CCS)</em>, Copenhagen, Denmark.</p>
  //             <a href="#" className="text-[#9E7C2C] hover:text-[#CFA54D] text-sm flex items-center w-max">
  //               <FileCode className="w-4 h-4 mr-1" /> View Paper
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderProjectsPage = () => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl font-bold text-[#000000] mb-6 font-serif">Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="bg-[#f8f8f5] p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
  
          {/* <p className="text-gray-700 mb-4">
          Developers often build software on top of third-party libraries (Libs) to improve programmer productivity and software quality. 
          The libraries may contain vulnerabilities exploitable by hackers to attack the applications (Apps) built on top of them.  Our research focus on:       
          </p> */}
          <ul className="space-y-2 mb-4">
          
            <li className="flex items-start">
              {/* <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" /> */}
              <span className="text-gray-700">Journal Reviewer</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Associate Editor for Digital Threats: Research and Practice (DTRAP), 2025 </span>
            </li>

            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Journal of Systems and Software (JSS), 2025 </span>
            </li>

            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">IEEE Transactions on Dependable and Secure Computing (TDSC), 2023-2025 </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">IEEE Transactions on Software Engineering (TSE), 2023, 2024</span>
            </li>

            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Information and Software Technology (INFSOF), 2024 </span>
            </li>

            <li className="flex items-start">
              {/* <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" /> */}
              <span className="text-gray-700">Conference/workshop Committee</span>
            </li>

            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">IEEE Secure Development Conference publication chair
              (SecDev ’25) </span>
            </li>

            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">the 40th IEEE/ACM International Conference on Automated Software engineering (ASE 2025 NIER) </span>
            </li>

            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Program committee on the First International Workshop on Large Language Model-Oriented Empirical Research
              (LLanMER ’25) </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Artifact Evaluation Committee: ACM SIGPLAN International Conference on Systems, Programming, Languages and Applications (SPLASH/OOPSLA), 2025;  the 45th ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2024). </span>
            </li>

            <li className="flex items-start">
              {/* <ChevronRight className="w-5 h-5 text-[#CFA54D] mt-0.5 flex-shrink-0" /> */}
              <span className="text-gray-700">2023 System Reading Group, CS, VT.</span>
            </li>
          
          </ul>
          {/* <div className="mt-4">
            <span className="inline-block bg-[#000000] text-white text-xs px-3 py-1 rounded-full mr-2 mb-2">NSF Funded</span>
            <span className="inline-block bg-[#9E7C2C] text-white text-xs px-3 py-1 rounded-full mr-2 mb-2">2023-2026</span>
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <div>
    <div className="min-h-screen bg-[#f4f4f0]">
      {/* Header */}
      <header className="bg-[#000000] text-white py-4 sm:py-6 border-b-4 border-[#CFA54D]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 md:mb-0">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#CFA54D]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-serif">Ying Zhang</h1>
                <p className="text-[#CFA54D]">Wake Forest University</p>
              </div>
            </div>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-end">
                <li>
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm font-medium flex items-center ${
                      currentPage === 'home' 
                        ? 'bg-[#CFA54D] text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Home className="w-4 h-4 mr-1" />
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('publications')}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm font-medium flex items-center ${
                      currentPage === 'publications' 
                        ? 'bg-[#CFA54D] text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Publications
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('projects')}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm font-medium flex items-center ${
                      currentPage === 'projects' 
                        ? 'bg-[#CFA54D] text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Briefcase className="w-4 h-4 mr-1" />
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('schedule')}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm font-medium flex items-center ${
                      currentPage === 'schedule' 
                        ? 'bg-[#CFA54D] text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Teaching
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'schedule' && renderSchedulePage()}
        {currentPage === 'publications' && renderPublicationsPage()}
        {currentPage === 'projects' && renderProjectsPage()}
        {currentPage === 'CSC331-schedule' && renderCSC331SchedulePage()}
      </main>

    </div>
    {/* Footer */}
    <footer className="bg-[#000000] text-white py-4 sm:py-6 border-t-4 border-[#CFA54D]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#CFA54D]">Department of Computer Science</p>
        <p className="mt-2 text-sm text-gray-400">© 2025 Ying Zhang, Wake Forest University. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
// Paper data for ICS Lab website
const papersData = [
  {
    id: "fairfed",
    title:
      "FairFed: Improving Fairness and Efficiency of Contribution Evaluation in Federated Learning via Cooperative Shapley Value",
    authors: [
      { name: "Yiqi Liu", link: "" },
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Ye Liu", link: "" },
      { name: "Bo Li", link: "" },
      { name: "Cong Wang", link: "" },
    ],
    conference: "IEEE INFOCOM 2024 - IEEE Conference on Computer Communications",
    date: "20-23 May 2024",
    doi: "10.1109/INFOCOM52122.2024.10621438",
    externalLink: "https://ieeexplore.ieee.org/document/10621438",
    image: "images/paper/cs-fairfed.png",
    abstract:
      "Deep learning models trained on sensitive data are vulnerable to privacy attacks that can reveal information about the training data. This paper introduces a novel framework for privacy-preserving deep learning in federated environments that combines differential privacy, secure aggregation, and model partitioning techniques. We demonstrate that our approach provides strong theoretical privacy guarantees while maintaining high model utility across various tasks and datasets. Experimental results show that our method outperforms existing privacy-preserving techniques in terms of accuracy-privacy tradeoffs and is scalable to large federated networks with hundreds of participants.",
  },
  {
    id: "friendseeker",
    title: "FriendSeeker: Inferring Hidden Friendship in Mobile Social Networks with Sparse Check-in Data",
    authors: [
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Yuting Tao", link: "" },
      { name: "Hongzi Zhu", link: "" },
      { name: "Bo Li", link: "" },
    ],
    conference: "2023 IEEE 43rd International Conference on Distributed Computing Systems (ICDCS)",
    date: "18-21 July 2023",
    doi: "10.1109/ICDCS57875.2023.00028",
    externalLink: "https://ieeexplore.ieee.org/document/10272493",
    image: "images/paper/cs-friendseeker.png",
    abstract:
      "Deep learning models trained on sensitive data are vulnerable to privacy attacks that can reveal information about the training data. This paper introduces a novel framework for privacy-preserving deep learning in federated environments that combines differential privacy, secure aggregation, and model partitioning techniques. We demonstrate that our approach provides strong theoretical privacy guarantees while maintaining high model utility across various tasks and datasets. Experimental results show that our method outperforms existing privacy-preserving techniques in terms of accuracy-privacy tradeoffs and is scalable to large federated networks with hundreds of participants.",
  },
  {
    id: "contactless",
    title: "Contactless Breathing Airflow Detection on Smartphone",
    authors: [
      { name: "Wei Liu", link: "" },
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Feng Li", link: "" },
      { name: "Yong Xu", link: "" },
      { name: "Shizong Yan", link: "" },
      { name: "Ye Liu", link: "" },
    ],
    conference: "IEEE Internet of Things Journal",
    date: "15 November 2022",
    doi: "10.1109/JIOT.2022.3222202",
    externalLink: "https://ieeexplore.ieee.org/document/9951134",
    image: "images/paper/cs-contactless.png",
    abstract:
      "Accurate and continuous breathing rate detection is crucial as it can help people to assess their physical health and provide early warning and diagnosis for potential human diseases. Traditional breathing detection approaches involving intrusive devices are uncomfortable for long-term continuous monitoring. While contactless detection approaches utilizing radio-frequency (RF) signals or acoustic signals mainly focus on sensing the changes of chest and abdomen displacements, which are not a good indicator recording breathing event due to existing false body movements. In this article, we present Wi-Tracker, a contactless breathing detection system based on commercial off-the-shelf (COTS) smartphones, which detects breathing event through capturing the Doppler effect caused by human exhaled airflow on the reflected acoustic wave. Specifically, Wi-Tracker uses the speaker on smartphone to transmit ultrasound signals and its microphone to receive the reflected acoustic signals recording breathing event. Then, we adopt a cumulative power spectral density (CPSD) method to extract fine-grained breathing pattern from the received signals. Finally, we design algorithms to accurately capture the breathing event from the extracted breathing pattern. We evaluate Wi-Tracker with six volunteers for a period of one month. Experimental results show that Wi-Tracker is able to achieve contactless breathing detection with a mean estimation error (MEE) of 0.17 bpm, which is even better as compared to RFID-based or WiFi-based approaches.",
  }
  ,
  {
    id: "vogue",
    title: "VOGUE: Secure User Voice Authentication on Wearable Devices using Gyroscope",
    authors: [
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Xinggan Hu", link: "" },
      { name: "Hongzi Zhu", link: "" },
      { name: "Wei Liu", link: "" },
      { name: "Lei Yang", link: "" },
    ],
    conference: "IEEE International Conference on Sensing, Communication, and Networking (SECON)",
    date: "20-23 September 2022",
    doi: "10.1109/SECON55815.2022.9918548",
    externalLink: "https://ieeexplore.ieee.org/document/9918548",
    image: "images/paper/cs-vogue.png",
    abstract:
      "Voice assistants are popular to wearable devices with limited input and output capabilities, however vulnerable to voice attacks, which cheat a voice assistant by playing forged voice commands without user awareness. In this paper, we propose VOGUE, which captures unique yet stable pattern of speech movement sequences of speakers with embedded gyroscope in wearable devices, to distinguish between registered legal user and malicious attackers (human or machines). The design of VOGUE is based on two key observations. First, speech, as a type of highly complex motor task, inherently requires coordinated actions of many orofacial, laryngeal, pharyngeal, and respiratory muscles, and the collective movements of muscles propagate to distant body segments. Second, to generate a certain word, the speech movement sequence of a speaker is known to be distinctive, and can be captured by inertial sensors. We implement VOGUE on three kinds of COTS android devices including smart glasses, watches and phones, and conduct comprehensive evaluation on the performances. Experimental results show that VOGUE achieves a mean false-acceptance rate (FAR) and false- rejection rate (FRR) of 2.23% and 2.48%, respectively, even under sophisticated voice impersonation attacks.",
  }
  ,
  {
    id: "PeerProbe",
    title: "PeerProbe: Estimating Vehicular Neighbor Distribution With Adaptive Compressive Sensing",
    authors: [
      { name: "Yunxiang Cai", link: "" },
      { name: "Hongzi Zhu", link: "" },
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Xiao Wang", link: "" },
      { name: "Jiangang Shen", link: "" },
      { name: "Minyi Guo", link: "" },
    ],
    conference: "IEEE/ACM Transactions on Networking",
    date: "14 February 2022 ",
    doi: "10.1109/TNET.2022.3149008",
    externalLink: "https://ieeexplore.ieee.org/document/9712634",
    image: "images/paper/cs-peerprobe.png",
    abstract:
      "Acquiring the geographical distribution of neighbors can support more adaptive media access control (MAC) protocols and other safety applications in Vehicular ad hoc network (VANETs). However, it is very challenging for each vehicle to estimate its own neighbor distribution in a fully distributed setting. In this paper, we propose an online distributed neighbor distribution estimation scheme, called PeerProbe, in which vehicles collaborate with each other to probe their own neighborhood via simultaneous symbol-level wireless communication. An adaptive compressive sensing algorithm is developed to recover a neighbor distribution based on a small number of random probes with non-negligible noise. Moreover, the needed number of probes adapts to the sparseness of the distribution. We implement a prototype system to verify the feasibility of PeerProbe in various typical vehicular channel conditions. We further conduct extensive simulations and the results demonstrate that PeerProbe is lightweight and can accurately recover highly dynamic neighbor distributions in critical channel conditions.",
  }
  ,
  {
    id: "Wi-PSG",
    title: "Wi-PSG: Detecting Rhythmic Movement Disorder Using COTS WiFi",
    authors: [
      { name: "Wei Liu", link: "" },
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Ye Liu", link: "" },
      { name: "Hao Zhang", link: "" },
    ],
    conference: "IEEE Internet of Things Journal",
    date: "07 October 2020 ",
    doi: "10.1109/JIOT.2020.3029266",
    externalLink: "https://ieeexplore.ieee.org/document/9216140",
    image: "images/paper/cs-Wi-PSG.png",
    abstract:
      "Rhythmic movement disorder (RMD) is closely related to health problems like insomnia, daytime fatigue, anxiety disorder, and depression, or even causes severe injuries resulting from the movements. To obtain detailed information of RMD related abnormal movements for early diagnosis, there are generally three categories of solutions: 1) using camera to record image data; 2) wearing various smart devices; and 3) deploying dedicated hardware to capture sensor data. But none of such are widely accepted for different reasons due to privacy, inconvenience and excessive overhead. We believe one of the essential features in a feasible solution is nonintrusiveness, in which movement data collection should be carried out without the awareness of targets. In addition, it should be fairly accurate and low cost. In this work, we propose Wi-PSG, a contactless and nonintrusive sleep monitoring system, which exploits channel state information (CSI) from existing WiFi infrastructures to detect RMD related movements. Specifically, we introduce new set of sensitivity metrics and reconstruct the collected CSI into an ideal subcarrier sensitive to all target movements. With the estimated CSI background model derived from static propagation paths, nonmovement interference can be canceled from RMD movement detection.We then train the classifier for distinguishing different kinds of RMD movements using both time and frequency features extracted from CSI signals. We implement Wi-PSG with a pair of WiFi devices and wireless access point. We evaluate Wi-PSG with nine volunteers over a one-month period. The extensive experiments demonstrate that Wi-PSG can achieve a recognition accuracy of above 92%, even under challenging scenarios.",
  }
  ,
  {
    id: "CoSafe",
    title: "CoSafe: Securing Mobile Devices through Mutual Mobility Consistency Verification",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Hang Chen", link: "" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Xinggang Hu", link: "" },
    { name: "Di Cao", link: "" }
    ],
    conference: "IEEE Transactions on Mobile Computing",
    date: "17 February 2020",
    doi: "10.1109/TMC.2020.2974222",
    externalLink: "https://ieeexplore.ieee.org/document/9000578",
    image: "images/paper/cs-CoSafe.png",
    abstract: "As mobile devices play increasingly important roles in our daily lives, it is of great significance to protect personal mobile devices from being lost. Noticing the trend that one person normally carries more than one mobile device, we propose an innovative scheme, called CoSafe, to detect device loss by verifying the motion consistency between a pair of devices. The rationale is that the vibrations perceived on devices carried by the same person should be tightly coupled whereas a lost device would show distinct mobility characteristics from others. Specifically, CoSafe compares the mobility consistency between a pair of devices on three levels, where coarse features (i.e., the mobility state and motion periodicity) are first compared to give fast response and more complex comparison on subtle feature (i.e., the relative phase) is conducted only when needed. In this way, CoSafe can instantly respond and introduce very low computation and communication costs. We implement CoSafe on a Commercial-Off-The-Shelf Android smartphone and a smartwatch, and conduct both trace-driven simulations and real-world experiments to evaluate the performance of CoSafe. The results show that CoSafe achieves a mean false negative ratio and false positive ratio of 1.46 and 3.12 percent, respectively, even under sophisticated stealing attacks."
  }
  ,
  {
    id: "Adaptive",
    title: "Adaptive and Blind Regression for Mobile Crowd Sensing",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Chao Li", link: "" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Hang Chen", link: "" }
    ],
    conference: "IEEE Transactions on Mobile Computing",
    date: "29 July 2019",
    doi: "10.1109/TMC.2019.2931341",
    externalLink: "https://ieeexplore.ieee.org/document/8778704",
    image: "images/paper/cs-Adaptive.png",
    abstract: "In mobile crowd sensing (MCS) applications, a public model of a system is expected to be derived from observations collected by mobile device users, through regression modeling. For example, a model describing the relationship between running speed, heart rate, height, and weight of runner can be constructed using MCS data collected from wristbands. Unique features of MCS data bring regression new challenges. First, observations are error-prone and private, making it of great difficulty to derive an accurate model without acquiring raw data. Second, observations are nonstationary and opportunistically, calling for an adaptive model updating mechanism. Last, mobile devices are resource-constrained, posing an urgent demand for lightweight regression. We propose an adaptive and blind regression scheme. The core idea is first to select an optimal safe' subset of observations locally stored over all participants, such that the inconsistency between the subset and the corresponding regression model is minimized, and as many observations as possible are included. Then, based on the resulted regression model, more observations are checked and selected to refine the model. With observations constantly coming, newly selected safe' observations are used to make the model updated adaptively. To preserve data privacy, one-time pad masking and blocking scheme are integrated."
  }
  ,
  {
    id: "Privacy",
    title: "Privacy in Neural Network Learning: Threats and Countermeasures",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Chao Li", link: "" }
    ],
    conference: "IEEE Network",
    date: "03 August 2018",
    doi: "10.1109/MNET.2018.1700447",
    externalLink: "https://ieeexplore.ieee.org/document/8425302",
    image: "images/paper/cs-Privacy.png",
    abstract: "Algorithmic breakthroughs, the feasibility of collecting huge amount of data, and increasing computational power, contribute to the remarkable achievements of NNs. In particular, since Deep Neural Network (DNN) learning presents astonishing results in speech and image recognition, the amount of sophisticated applications based on it has exploded. However, the increasing number of instances of privacy leakage has been reported, and the corresponding severe consequences have caused great worry in this area. In this article, we focus on privacy issues in NN learning. First, we identify the privacy threats during NN training, and present privacy-preserving training schemes in terms of using centralized and distributed approaches. Second, we consider the privacy of prediction requests, and discuss the privacy-preserving protocols for NN prediction. We also analyze the privacy vulnerabilities of trained models. Three types of attacks on private information embedded in trained NN models are discussed, and a differential privacy-based solution is introduced."
    }
  ,
  {
    id: "Revealing",
    title: "Revealing Privacy Vulnerabilities of Anonymous Trajectories",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Chao Li", link: "" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Ting Lu", link: "" },
    { name: "Qiang Li", link: "" }
    ],
    conference: "IEEE Transactions on Vehicular Technology",
    date: "23 September 2018",
    doi: "10.1109/TVT.2018.2871745",
    externalLink: "https://ieeexplore.ieee.org/document/8470102",
    image: "images/paper/cs-Revealing.png",
    abstract: "The proliferation of various mobile devices equipped with GPS positioning modules makes the collection of trajectories more easier than ever before, and more and more trajectory datasets have been available for business applications or academic researches. Normally, published trajectories are often anonymized by replacing real identities of mobile objects with pseudonyms (e.g., random identifiers); however, privacy leaks can hardly be prevented. In this paper, we introduce a novel paradigm of de-anonymization attack re-identifying trajectories of victims from anonymous trajectory datasets. Different from existing attacks, no background knowledge or side channel information about the target dataset is required. Instead, we claim that, for each moving object, there exist some mobility patterns that reflect the preference or usual behavior of the object, and will not change dramatically over a period of time. As long as those relatively stable patterns can be extracted from trajectories and be utilized as quasi-identifiers, trajectories can be linked to anonymous historical ones. To implement such kind of de-anonymization attacks, an adversary only needs to collect a few trajectory segments of a victim, the durations of which do not necessarily overlap with that of trajectories in the target dataset (in simple terms, those trajectory segments are not necessary sub-trajectories included in the target dataset). Since the movements of victims in public areas could be observed openly, an adversary can obtain traces or locations about the victims either by direct monitoring them (e.g., tracking) or from third parties (e.g., social-networks). Then, the adversary extracts useful patterns from both the historical trajectories in the accessible dataset and newly obtained trajectory segments of victims, the historical trajectory with most similar patterns to that of a victim is considered as belonging to the victim. In order to demonstrate the feasibility of such attacks, we conduct extensive trace-driven simulations. We extract road segment preferences and stop of interests from trajectories of vehicles, and construct feature vectors (mobility patterns) of vehicles according to them, used for trajectory comparisons. Simulation results show that the adversary could re-identify anonymous trajectories effectively."
    }
  ,
  {
    id: "Lotus",
    title: "Lotus: Evolutionary Blind Regression over Noisy Crowdsourced Data",
    authors: [
    { name: "Chao Li", link: "" },
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Hang Chen", link: "" },
    { name: "Ting Lu", link: "" }
    ],
    conference: "2018 15th Annual IEEE International Conference on Sensing, Communication, and Networking (SECON)",
    date: "11 - 13 June 2018",
    doi: "10.1109/SAHCN.2018.8397096",
    externalLink: "https://ieeexplore.ieee.org/document/8397096",
    image: "images/paper/cs-Lotus.png",
    abstract: "In mobile crowd sensing (MCS) applications, a public model of a system or phenomenon is expected to be derived from sensory data, i.e., observations, collected by mobile device users, through regression modeling. Unique features of MCS data bring the regression task new challenges. First, observations are error-prone and private, making it of great difficulty to derive an accurate model without acquiring raw data. Second, observations are non-stationary and opportunistically generated, calling for an evolutionary model updating mechanism. Last, mobile devices are resource-constrained, posing an urgent demand for lightweight regression schemes. In this paper, we propose an evolutionary blind regression scheme, called Lotus, in MCS settings. The core idea is first to select a 'maximum-safe-subset' of observations locally stored over all participants, which refers to finding a subset containing half of observations, such that the corresponding regression model has a minimum value of residual sum of squares. It implies the inconsistency between observations in the subset is minimized. Since such a maximum-safe-subset selection problem is NP-hard, a distributed greedy hill-climbing algorithm is proposed. Then, based on the resulted regression model, more observations are checked. Selected ones will be used to refine the model. With observations constantly coming, newly selected 'safe' observations are used to make the model evolved. To preserve data privacy, a one-time pad masking mechanism, and a blocking scheme are integrated into the process of regression estimation. Intensive theoretical analysis and extensive trace driven simulations are conducted and the results demonstrate the efficacy of the Lotus design."
    }
  ,
  {
    id: "PURE",
    title: "PURE: Blind Regression Modeling for Low Quality Data with Participatory Sensing",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Wei Zhang", link: "" },
    { name: "Li Lu", link: "" },
    { name: "Yanmin Zhu", link: "" }
    ],
    conference: "IEEE Transactions on Parallel and Distributed Systems",
    date: "29 April 2015",
    doi: "10.1109/TPDS.2015.2427805",
    externalLink: "https://ieeexplore.ieee.org/abstract/document/7097702",
    image: "images/paper/cs-PURE.png",
    abstract: "Participatory regression modeling is a cost-efficient mechanism to establish the relationships among multiple dimensions of sensory data collected from volunteers. Getting an accurate model estimate is challenging for two main reasons. First, with the concern of confidentiality of individual private data, the original data are nearly unavailable; second, low quality data with outliers are inherently embedded in the collected data. In this paper, we propose an innovative scheme, PURE, which can accurately estimate the global regression model without the need for knowing local private data (referred to as blind regression modeling) even when there is a large portion of outliers embedded. The wisdom of PURE is to let individual participants peer judge and further improve the global estimate via negotiations. Meanwhile, during the whole process, all information is exchanged in an aggregated way. By design, PURE is secure and can well protect individual privacy. Furthermore, PURE is a lightweight protocol suitable for mobile devices. Extensive trace-driven simulation results show that PURE can achieve an outstanding accuracy gain of two orders of magnitude even with random outliers near a ratio of 50 percent compared with the state-of-the-art least square estimator."
    }
  ,
  {
    id: "Footprint",
    title: "Footprint: Detecting Sybil Attacks in Urban Vehicular Networks",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Yong Qi", link: "" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Jizhong Zhao", link: "" },
    { name: "Xuemin Shen", link: "" }
    ],
    conference: "IEEE Transactions on Parallel and Distributed Systems",
    date: "25 October 2011",
    doi: "10.1109/TPDS.2011.263",
    externalLink: "https://ieeexplore.ieee.org/abstract/document/6060810",
    image: "images/paper/cs-Footprint.png",
    abstract: "In urban vehicular networks, where privacy, especially the location privacy of anonymous vehicles is highly concerned, anonymous verification of vehicles is indispensable. Consequently, an attacker who succeeds in forging multiple hostile identifies can easily launch a Sybil attack, gaining a disproportionately large influence. In this paper, we propose a novel Sybil attack detection mechanism, Footprint, using the trajectories of vehicles for identification while still preserving their location privacy. More specifically, when a vehicle approaches a road-side unit (RSU), it actively demands an authorized message from the RSU as the proof of the appearance time at this RSU. We design a location-hidden authorized message generation scheme for two objectives: first, RSU signatures on messages are signer ambiguous so that the RSU location information is concealed from the resulted authorized message; second, two authorized messages signed by the same RSU within the same given period of time (temporarily linkable) are recognizable so that they can be used for identification. With the temporal limitation on the linkability of two authorized messages, authorized messages used for long-term identification are prohibited. With this scheme, vehicles can generate a location-hidden trajectory for location-privacy-preserved identification by collecting a consecutive series of authorized messages. Utilizing social relationship among trajectories according to the similarity definition of two trajectories, Footprint can recognize and therefore dismiss “communities” of Sybil trajectories. Rigorous security analysis and extensive trace-driven simulations demonstrate the efficacy of Footprint."
    }
  ,
  {
    id: "Private",
    title: "Private and Flexible Urban Message Delivery",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Mianxiong Dong", link: "" },
    { name: "Kaoru Ota", link: "" },
    { name: "Xiaoqiang Liu", link: "" },
    { name: "Xuemin Shen", link: "" }
    ],
    conference: "IEEE Transactions on Vehicular Technology",
    date: "11 August 2015",
    doi: "10.1109/TVT.2015.2466651",
    externalLink: "https://ieeexplore.ieee.org/document/7185419",
    image: "images/paper/cs-Private.png",
    abstract: "With the popularity of intelligent mobile devices, enormous amounts of urban information has been generated and demanded by the public. In response, ShanghaiGrid (SG) aims to provide abundant information services to the public. With a fixed schedule and urbanwide coverage, an appealing service in SG is to provide free message delivery service to the public using buses, which allows mobile device users to send messages to locations of interest via buses. The main challenge in realizing this service is to provide an efficient routing scheme with privacy preservation under a highly dynamic urban traffic condition. In this paper, we present the innovative scheme BusCast to tackle this problem. In BusCast, buses can pick up and forward personal messages to their destination locations in a store–carry–forward fashion. For each message, BusCast conservatively associates a routing graph rather than a fixed routing path with the message to adapt the dynamic of urban traffic. Meanwhile, the privacy information about the user and the message destination is concealed from both intermediate relay buses and outside adversaries. Both rigorous privacy analysis and extensive trace-driven simulations demonstrate the efficacy of the BusCast scheme."
    }
  ,
  {
    id: "Vulnerability",
    title: "Vulnerability aware graphs for RFID protocol security benchmarking",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Li Lu", link: "" },
    { name: "Xiaoqiang Liu", link: "" },
    { name: "Hui Song", link: "" },
    { name: "Qingsong Yao", link: "" },
    ],
    conference: "Journal of Computer and System Sciences",
    date: "September 2015",
    doi: "10.1016/j.jcss.2014.12.015",
    externalLink: "https://www.sciencedirect.com/science/article/pii/S0022000014001792#:~:text=In%20this%20paper%2C%20we%20propose%20a%20random%20graph-based,automated%20analysis%20and%20benchmarking%20of%20RFID%20security%20protocols.",
    image: "images/paper/cs-Vulnerability.png",
    abstract: "Security and privacy issues in Radio Frequency Identification (RFID) systems mainly result from limited storage and computation resources of RFID tags and unpredictable communication environment. Although many security protocols for RFID system have been proposed, most of them have various flaws. We propose a random graph-based methodology enabling automated benchmarking of RFID security. First, we formalize the capability of adversaries by a set of atomic actions. Second, Vulnerability Aware Graphs (VAGs) were developed to elaborate the interactions between adversaries and RFID systems, which are used to discover the potential attacks of adversaries via some paths on the graphs. The quantitative analysis on VAGs can predict the probability that the adversary leverages the potential flaws to perform attacks. Moreover, a joint entropy-based method is provided to measure the indistinguishability of RFID tags under passive attacks. Analysis and simulation were conducted to show the validity and effectiveness of VAGs."
    }
  ,
  {
    id: "Where",
    title: "Where Were You Yesterday: Privacy Risk of Published Anonymous Trajectories",
    authors: [
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Xiaoqiang Liu", link: "" },
    { name: "Hongzi Zhu", link: "" },
    { name: "Mianxiong Dong", link: "" },
    { name: "Kaoru Ota", link: "" },
    { name: "Ting Lu", link: "" }
    ],
    conference: "2016 IEEE Global Communications Conference (GLOBECOM)",
    date: "04 - 08 December 2016",
    doi: "10.1109/GLOCOM.2016.7842382",
    externalLink: "https://ieeexplore.ieee.org/document/7842382",
    image: "images/paper/cs-Where.png",
    abstract: "With more and more trajectory traces available, conducting analysis and mining on those trajectories can obtain valuable information. Although the published traces are often made anonymous by substituting the true identities of mobile nodes with random identifiers, the privacy concern remains. In this paper, we propose a new de-anonymization attack based on the movement pattern of moving objects. Since moving objects are open to observe in public spaces, an attacker can easily learn information about a victim's movement either through direct observations or from third parties. After collecting a few trajectory segments of a mobile object, the movement pattern of the victim can be extracted, using an improved TF-IDF method. By comparing the movement pattern of the victim with those extracted from historical anonymous traces, it is possible to identify the victim from the anonymous traces. We conduct extensive trace-driven simulations and the results demonstrate that the attacker is able to de-anonymize anonymous trajectories with high probability."
    }
  ,
  {
    id: "Exploiting",
    title: "Exploiting temporal dependency for opportunistic forwarding in urban vehicular networks",
    authors: [
    { name: "Hongzi Zhu", link: "" },
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Minglu Li", link: "" },
    { name: "Kshirasagar Naik", link: "" },
    { name: "Sherman Shen", link: "" }
    ],
    conference: "2011 Proceedings IEEE INFOCOM",
    date: "10 - 15 April 2011",
    doi: "10.1109/INFCOM.2011.5935032",
    externalLink: "https://ieeexplore.ieee.org/document/5935032",
    image: "images/paper/cs-Exploiting.png",
    abstract: "Inter-contact times (ICTs) between moving vehicles are one of the key metrics in vehicular networks, and they are also central to forwarding algorithms and the end-to-end delay. Recent study on the tail distribution of ICTs based on theoretical mobility models and empirical trace data shows that the delay between two consecutive contact opportunities drops exponentially. While theoretical results facilitate problem analysis, how to design practical opportunistic forwarding protocols in vehicular networks, where messages are delivered in carry-and-forward fashion, is still unclear. In this paper, we study three large sets of Global Positioning System (GPS) traces of more than ten thousand public vehicles, collected from Shanghai and Shenzhen, two metropolises in China. By mining the temporal correlation and the evolution of ICTs between each pair of vehicles, we use higher order Markov chains to characterize urban vehicular mobility patterns, which adapt as ICTs between vehicles continuously get updated. Then, the next hop for message forwarding is determined based on the previous ICTs. With our message forwarding strategy, it can dramatically increase delivery ratio (up to 80%) and reduce end-to-end delay (up to 50%) while generating similar network traffic comparing to current strategies based on the delivery probability or the expected delay."
    }
  ,
  {
    id: "ZOOM",
    title: "ZOOM: Scaling the mobility for fast opportunistic forwarding in vehicular networks",
    authors: [
    { name: "Hongzi Zhu", link: "" },
    { name: "Mianxiong Dong", link: "" },
    { name: "Shan Chang", link: "members/prof-changshan.html" },
    { name: "Yanmin Zhu", link: "" },
    { name: "Minglu Li", link: "" },
    { name: "Xuemin Sherman Shen", link: "" }
    ],
    conference: "2013 Proceedings IEEE INFOCOM",
    date: "14 - 19 April 2013",
    doi: "10.1109/INFCOM.2013.6567093",
    externalLink: "https://ieeexplore.ieee.org/document/6567093",
    image: "images/paper/cs-ZOOM.png",
    abstract: "Vehicular networks consist of highly mobile vehicles communications, where connectivity is intermittent. Due to the distributed and highly dynamic nature of vehicular network, to minimize the end-to-end delay and the network traffic at the same time in data forwarding is very hard. Heuristic algorithms utilizing either contact-level or social-level scale of vehicular mobility have only one-sided view of the network and therefore are not optimal. In this paper, by analyzing three large sets of Global Positioning System (GPS) trace of more than ten thousand public vehicles, we find that pairwise contacts have strong temporal correlation. Furthermore, the contact graph of vehicles presents complex structure when aggregating the underlying contacts. In understanding the impact of both levels of mobility to the data forwarding, we propose an innovative scheme, named ZOOM, for fast opportunistic forwarding in vehicular networks, which automatically choose the most appropriate mobility information when deciding next data-relays in order to minimize the end-to-end delay while reducing the network traffic. Extensive trace-driven simulations demonstrate the efficacy of ZOOM design. On average, ZOOM can improve 30% performance gain comparing to the state-of-art algorithms."
    }
  ,
  {
    id: "Multi-UAV",
    title: "Multi-UAV Aided Multi-Access Edge Computing in Marine Communication Networks: A Joint System-Welfare and Energy-Efficient Design",
    authors: [
    { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
    { name: "Chenglong Dou", link: "" },
    { name: "Yuan Wu", link: "" },
    { name: "Liping Qian", link: "" },
    { name: "Rongxing Lu", link: "" },
    { name: "Tony Q. S. Quek", link: "" }
    ],
    conference: "IEEE Transactions on Communications",
    date: "15 April 2024",
    doi: "10.1109/TCOMM.2024.3388501",
    externalLink: "https://ieeexplore.ieee.org/document/10499911",
    image: "images/paper/cs-Multi-UAV.png",
    abstract: "The integration of unmanned aerial vehicles (UAVs) and marine communication networks has been emerging as a promising paradigm to cater for the growing maritime activities, e.g., marine environment monitoring and ocean resource exploration. The increasing growth of marine applications and services poses challenges for processing marine data, while the resources-limited UAVs cannot satisfy the requirements of computing-intensive and energy consumption. In this paper, we consider a marine edge computing scenario with a group of UAVs and ocean beacon stations (OBSs) and propose a multi-UAV aided multi-access edge computing for marine networks from the perspective of system-welfare and energy-efficient design. Specifically, we propose a multi-task multi-access offloading scheme in marine edge computing networks, in which multiple UAVs can process their workloads locally or offload their partial workloads to multiple OBSs for processing. We consider the total utilities for completing all tasks as the system welfare, and measure the difference between the system welfare and energy consumption as the system revenue. A joint optimization problem is formulated by optimizing the OBS selection, the offloading ratio and the transmission duration, with the objective of increasing the system revenue in marine edge computing networks. We exploit a vertical decomposition architecture to solve the formulated non-convex problem via decomposing it into three sub-problems. Regarding each sub-problem, we propose efficient algorithms to derive the optimal solutions. We finally conduct simulations to verify the performance of the proposed algorithms. The results demonstrate that our proposed algorithms can achieve the best performance for improving the system revenue in comparison with several benchmark algorithms."
    }
  ,
  {
    id: "Incentive",
    title: "Incentive Oriented Two-Tier Task Offloading Scheme in Marine Edge Computing Networks: A Hybrid Stackelberg-Auction Game Approach",
    authors: [
    { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
    { name: "Zhishen Luo", link: "" },
    { name: "Yuan Wu", link: "" },
    { name: "Liping Qian", link: "" },
    { name: "Bin Lin", link: "" },
    { name: "Zhou Su", link: "" }
    ],
    conference: "IEEE Transactions on Wireless Communications",
    date: "11 April 2023",
    doi: "10.1109/TWC.2023.3264607",
    externalLink: "https://ieeexplore.ieee.org/document/10100681",
    image: "images/paper/cs-Incentive.png",
    abstract: "With the increasing exploration of marine resources, various marine wireless devices have been rapidly deployed for different marine applications such as marine navigation, ocean environment monitoring, and seabed resource exploitation. However, due to long transmission delay and low data rate between marine wireless devices and the cloud, it is challenging to satisfy the service requirements of computing-intensive and delay-sensitive tasks. By migrating computing resources from cloud to the near side of ocean, the paradigm of marine edge computing networks, which integrates communication and computation capacities in marine wireless devices, is expected to support a variety of marine tasks (e.g., data collection, monitoring and processing) with low delay and high data rate. However, considering the rationality and selfishness of marine wireless devices and their limited computing-capacity, how to motivate marine wireless devices to conduct task processing becomes an important problem for improving computing efficiency. To address this issue, in this paper, we propose an incentive oriented two-tier task offloading scheme for marine edge computing networks via hybrid Stackelberg-auction game approach, with the objective of improving the offloading efficiency and maximizing marine wireless devices’ utilities. Specifically, for underwater acoustic transmission tier, we exploit multi-access task offloading scheme, in which underwater wireless sensor (UWS) uploads its workloads to an unmanned underwater vehicle (UUV) and a sea surface sink node (SN) via non-orthogonal multiple access (NOMA) transmission. We formulate the utility of each party and model the task offloading process among UWS, UUV and SN as a Stackelberg game to optimize the UWS’s offloading strategy, UUV’s and SN’s price strategies. For radio frequency transmission tier, SN can offload its partial workloads to an unmanned aerial vehicle (UAV) via frequency division multiple access (FDMA) transmission. We provide their utilities and model the offloading process between a SN and a UAV as a double auction game to optimize their bidding strategies. Extensive simulation results are provided to validate the performance of the proposed scheme. Numerical results demonstrate that the proposed algorithms can obtain the optimal solutions and increase the utilities for marine wireless devices."
    }
  ,
  {
    id: "Latency",
    title: "Latency Minimization Oriented Hybrid Offshore and Aerial-Based Multi-Access Computation Offloading for Marine Communication Networks",
    authors: [
    { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
    { name: "Ning Huang", link: "" },
    { name: "Yuan Wu", link: "" },
    { name: "Liping Qian", link: "" },
    { name: "Bin Lin", link: "" },
    { name: "Zhou Su", link: "" }
    ],
    conference: "IEEE Transactions on Communications",
    date: "18 August 2023",
    doi: "10.1109/TCOMM.2023.3306581",
    externalLink: "https://ieeexplore.ieee.org/abstract/document/10224351",
    image: "images/paper/cs-Latency.png",
    abstract: "The explosively increasing development of marine communication networks will improve the quality of service (QoS) of marine applications (e.g., ocean farm and marine tourism), which has attracted much attention from both academia and industrial in recent years. However, real-time data processing for diverse marine tasks (especially those computing-intensive and latency-sensitive tasks) is still challenging due to the limited marine communication and computing resources. Mobile edge computing (MEC) driven by powerful computing capability is envisioned as a promising solution to address the issue for resource-constrained marine services. In this paper, we propose a hybrid offshore and aerial-based multi-access edge computing scheme in marine communication networks to improve the QoS of marine applications. Specifically, we consider a scenario that both offshore base-station and unmanned aerial vehicles (UAVs) are equipped with edge-servers, and the computation workloads of unmanned surface vehicle (USV) can be simultaneously offloaded to offshore base-station and UAVs via multi-access manner. To minimize the latency of completing USV’s workloads and reduce USV’s energy consumption, we formulate a joint optimization problem to optimize the offloading decision, transmission time, and computing-rate allocation, with the objective of Minimizing the Maximum Workloads Latency (MMWL). Exploiting the features of the formulated problem, we present a layered structure approach and decompose it into three subproblems. We propose efficient algorithms to obtain the optimal solutions and validate the optimality of the proposed algorithms. Finally, we provide simulation results and analysis to demonstrate the effectiveness and efficiency of the proposed scheme and algorithms in comparison with benchmark algorithms."
    }
  ,
  {
    id: "UAV-Assisted",
    title: "UAV-Assisted Multi-Access Computation Offloading via Hybrid NOMA and FDMA in Marine Networks",
    authors: [
        { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
        { name: "Yuan Wu", link: "" },
        { name: "Liping Qian", link: "" },
        { name: "Zhou Su", link: "" },
        { name: "Bin Lin", link: "" },
        { name: "Nan Chen", link: "" }
    ],
    conference: "IEEE Transactions on Network Science and Engineering",
    date: "09 September 2022",
    doi: "10.1109/TNSE.2022.3205303",
    externalLink: "https://ieeexplore.ieee.org/document/9882311",
    image: "images/paper/cs-UAV-Assisted.png",
    abstract: "With the rapid development of marine networks, there have been growing demands for computation-intensive and delay-sensitive marine applications and services. However, the limited underwater energy supply and the acoustic channels result in the low efficiency for computing tasks and high transmission delay. In this paper, we investigate the unmanned aerial vehicles (UAVs)-assisted multi-access computation offloading in marine networks, with the objective of minimizing the energy consumption of ocean devices. Specifically, for the underwater segment, we consider the scenario that multiple underwater sensor nodes (USNs) covered by the unmanned surface vehicle (USV) upload their sensing data via non-orthogonal multiple access (NOMA) for improving the channel utilization. For the radio frequency segment, we consider the scenario that multiple UAVs hovering in the air act as the aerial edge servers for providing computing services, in which the USV offloads the workloads to UAVs via frequency division multiple access (FDMA) for avoiding their co-channel interference, while taking into account that a malicious node overhears the USV's offloading transmission. To improve the computation offloading efficiency, we formulate an optimization problem for USNs and USV to minimize the total energy consumption by jointly optimizing the USN's uploading time, USV's computation offloading, USV's offloading time, and the secrecy provisioning. Despite the non-convexity of the formulated joint optimization problem, we exploit a layered structure to decompose the problem, and propose efficient algorithms to obtain the optimal solutions. Finally, we conduct simulations to validate the effectiveness and efficiency of the proposed algorithms. Numerical results demonstrate that our algorithms can significantly reduce the energy consumption in comparison with the benchmark schemes."
}
  ,
  {
    id: "Joint",
    title: "Joint Channel Allocation and Data Delivery for UAV-Assisted Cooperative Transportation Communications in Post-Disaster Networks",
    authors: [
        { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
        { name: "Tom H. Luan", link: "" },
        { name: "Zhou Su", link: "" },
        { name: "Ning Zhang", link: "" },
        { name: "Qichao Xu", link: "" },
        { name: "Ruidong Li", link: "" }
    ],
    conference: "IEEE Transactions on Intelligent Transportation Systems",
    date: "19 August 2022",
    doi: "10.1109/TITS.2022.3178789",
    externalLink: "https://ieeexplore.ieee.org/document/9863761",
    image: "images/paper/cs-Joint.png",
    abstract: "As the natural disasters may destroy the ground communication infrastructures for the transportation systems, the communication relief in post-disaster networks is more crucial to reduce risk loss. The growing application of unmanned aerial vehicles (UAVs) holds great potential for disaster communication relief due to its flexibility and functionalities. In this paper, we investigate the channel allocation and data delivery problems for UAV-assisted cooperative transportation communications in post-disaster networks to provide communication and data delivery services for affected users. Specifically, we first introduce the UAV-assisted communication relief system, in which UAVs equipped with the communication and caching functionalities are deployed as the aerial base stations in post-disaster regions. Then, we propose the channel allocation scheme between UAVs and users by taking the interferences into consideration, and obtain the channel allocation strategy to improve the network throughput. Based on the optimal channel allocation strategy, users can deliver their data to UAVs for backup. Next, we propose the data delivery scheme to cope with the pricing problem for UAVs and the data delivery strategy for users to improve the efficiency of data delivery, with the objective of maximizing the utilities of both UAVs and users. The optimal strategy for both UAVs and users are derived according to the analysis of Stackelberg game. Finally, we conduct simulations to evaluate the performance of the proposed channel allocation and data delivery scheme, and the numerical results demonstrate that the proposed scheme can significantly improve the efficiency and effectiveness of channel allocation and data delivery in post-disaster networks, compared with benchmark schemes."
}
  ,
  {
    id: "Trust-Driven",
    title: "A Trust-Driven Contract Incentive Scheme for Mobile Crowd-Sensing Networks",
    authors: [
        { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
        { name: "Zhou Su", link: "" },
        { name: "Qichao Xu", link: "" },
        { name: "Yuntao Wang", link: "" },
        { name: "Ning Lu", link: "" }
    ],
    conference: "IEEE Transactions on Vehicular Technology",
    date: "06 October 2021",
    doi: "10.1109/TVT.2021.3117696",
    externalLink: "https://ieeexplore.ieee.org/document/9560074",
    image: "images/paper/cs-Trust-Driven.png",
    abstract: "By leveraging the power of crowd, the prevalence of mobile devices in mobile crowd-sensing (MCS) networks helps and provides a wide range of sensing services through collecting and sharing sensing data. However, due to the diverse behaviours of mobile users, unreliable or malicious users and platforms could provide untrusted data, which affects the quality of sensing service. Besides, mobile users are reluctant to participate in sensing tasks without sufficient incentives. It is desirable to design a trust and incentive scheme to improve the service efficiency of MCS. In this paper, we propose a novel trust-driven contract incentive framework in MCS, which guarantees the service quality and stimulates mobile users to join sensing tasks. We first design a trust evaluation scheme between mobile users and sensing platforms based on the historical interactions to derive the reliability value of sensing platform. Then, the trust threshold is formulated to filter out malicious sensing platforms. By considering the privacy preferences of mobile users, we establish a contract incentive scheme to maximize the utility of both mobile users and sensing platforms. The design objective is to derive a set of optimal contracts under both discrete and continuous contract models. Meanwhile, the designed contracts guarantee the individual rationality (IR) and incentive compatibility (IC) properties. Finally, simulations are conducted to evaluate the effectiveness of the proposed trust-driven contract incentive scheme, and results demonstrate that the proposed scheme can jointly improve the quality of sensing service and maximize the utilities of mobile users and sensing platforms."
}
  ,
  {
    id: "Vehicle",
    title: "Vehicle Assisted Computing Offloading for Unmanned Aerial Vehicles in Smart City",
    authors: [
        { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
        { name: "Zhou Su", link: "" },
        { name: "Qichao Xu", link: "" },
        { name: "Ning Zhang", link: "" }
    ],
    conference: "IEEE Transactions on Intelligent Transportation Systems",
    date: "26 February 2021",
    doi: "10.1109/TITS.2021.3052979",
    externalLink: "https://ieeexplore.ieee.org/abstract/document/9364753",
    image: "images/paper/cs-Vehicle.png",
    abstract: "Smart city emerges a promising paradigm for improving operational efficiency of city and comfort of people. With embedded multi-sensors, Unmanned Aerial Vehicles (UAVs) hold great potential for collecting sensing data and providing social services in smart city. However, due to the limited battery lifetime and processing capacities of UAVs, the efficient offloading scheme of UAVs is urgently needed in smart city. Therefore, in this article, a vehicle-assisted computing offloading architecture for UAVs is proposed to improve offloading efficiency by harnessing the moving vehicles in smart city. We first develop an offloading model for UAVs to determine the offloading strategy. Next, to select the optimal vehicles for offloading, we formulate a matching scheme based on the preference lists of UAVs and vehicles to derive the optimal matching between UAVs and vehicles. After that, to improve the offloading efficiency and maximize the utilities of UAVs and vehicles, the transaction process of computing data between UAVs and vehicles is modeled as a bargaining game. Moreover, an offloading algorithm for UAVs and vehicles is proposed to obtain the optimal strategy. Finally, simulations are performed to validate the efficiency of the proposed offloading scheme. The results demonstrate that the proposed offloading scheme can significantly save resource and improve the utilities of UAVs and vehicles."
}
  ,
  {
    id: "Preservation",
    title: "A Privacy Preservation Based Scheme for Task Assignment in Internet of Things",
    authors: [
        { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
        { name: "Jiliang Li", link: "" },
        { name: "Zhou Su", link: "" },
        { name: "Weiwei Chen", link: "" },
        { name: "Qichao Xu", link: "" },
        { name: "Shu Fu", link: "" }
    ],
    conference: "IEEE Transactions on Network Science and Engineering",
    date: "31 January 2020",
    doi: "10.1109/TNSE.2020.2970767",
    externalLink: "https://ieeexplore.ieee.org/document/8977343",
    image: "images/paper/cs-Preservation.png",
    abstract: "With the rapid increasing demands of social services, mobile crowd sensing (MCS) is getting growing attraction with the wide applicability of mobile applications. This effective paradigm depends on sensing services from crowd contributors for sensing data collection and sharing. However, on one hand, the sensing data is tampered by malicious users without the reputation evaluation. On the other hand, the privacy information is exposed when mobile users submit sensing data to others. Moreover, the efficiency of task assignment is low without incentives. Therefore, we propose a privacy preservation based scheme for task assignment in internet of things (IoT) to improve the performance of crowd sensing. Firstly, a novel trusted framework is developed to judge mobile user's reputation value. In the proposed framework, the reputation evaluation scheme is established based on the social trust, recommendation credibility, and history evaluation. Secondly, the location-privacy preservation algorithm (LPA) based differential privacy method is designed to protect mobile user's location privacy and select the credible users to complete sensing tasks. Thirdly, to incentivize mobile users, we model the transaction process between mobile requesters and mobile responders as the first-order sealed price auction game. After that, the task assignment based bidding-preferred (TAB) algorithm is proposed to assign tasks to mobile users. Finally, simulation results demonstrate that the proposed scheme can effectively improve the number of finished tasks and bring more utilities to mobile users compared with the conventional methods."
}
  ,
  {
    id: "Bayesian-Driven",
    title: "Bayesian-Driven Automated Scaling in Stream Computing With Multiple QoS Targets",
    authors: [
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" },
        { name: "Wenli Zheng", link: "" },
        { name: "Kuangyu Zheng", link: "" },
        { name: "Hongzi Zhu", link: "" },
        { name: "Chao Li", link: "" },
        { name: "Minyi Guo", link: "" }
    ],
    conference: "IEEE Transactions on Parallel and Distributed Systems",
    date: "13 May 2024",
    doi: "10.1109/TPDS.2024.3399834",
    externalLink: "https://ieeexplore.ieee.org/document/10529587",
    image: "images/paper/cs-Bayesian-Driven.png",
    abstract: "Stream processing systems commonly work with auto-scaling to ensure resource efficiency and quality of service (QoS). Existing auto-scaling solutions lack accuracy in resource allocation because they rely on static QoS-resource models that fail to account for high workload variability and use indirect metrics with much distractive information. Moreover, different types of QoS metrics present different characteristics and thus need individual auto-scaling methods. In this paper, we propose a versatile auto-scaling solution for operator-level parallelism configuration, called AuTraScale+, to meet the throughput, processing-time latency, and event-time latency targets. AuTraScale+ follows the Bayesian optimization framework to make scaling decisions. First, it uses the Gaussian process model to eliminate the negative influence of uncertain factors on the performance model accuracy. Second, it leverages the expected improvement-based (EI-based) acquisition function to search and recommend the optimal configuration quickly. Besides, to make a more accurate scaling decision when the new model is not ready, AuTraScale+ proposes a transfer learning algorithm to estimate the benefits of all configurations at a new rate based on existing models and then recommend the optimal one. We implement and evaluate AuTraScale+ on the Flink platform. The experimental results on three representative workloads demonstrate that compared with the state-of-the-art methods, AuTraScale+ can reduce 66.6% and 36.7% resource consumption, respectively, in the scale-down and scale-up scenarios while achieving their throughput and processing-time latency targets. Compared with other methods of optimizing event-time latency, AuTraScale+ saves 26.9% of resources on average."
}
  ,
  {
    id: "Novas",
    title: "Novas: Tackling Online Dynamic Video Analytics With Service Adaptation at Mobile Edge Servers",
    authors: [
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" },
        { name: "Hongzi Zhu", link: "" },
        { name: "Wen Fei", link: "" },
        { name: "Yunzhe Li", link: "" },
        { name: "Mingjin Zhang", link: "" },
        { name: "Jiannong Cao", link: "" }
    ],
    conference: "IEEE Transactions on Computers",
    date: "19 June 2024",
    doi: "10.1109/TC.2024.3416675",
    externalLink: "https://ieeexplore.ieee.org/document/10565291",
    image: "images/paper/cs-Novas.png",
    abstract: "Video analytics at mobile edge servers offers significant benefits like reduced response time and enhanced privacy. However, guaranteeing various quality-of-service (QoS) requirements of dynamic video analysis requests on heterogeneous edge devices remains challenging. In this paper, we propose a scalable online video analytics scheme, called Novas, which automatically makes precise service configuration adjustments upon constant video content changes. Specifically, Novas leverages the filtered confidence sum and a two-window t-test to online detect accuracy fluctuations without ground truth information. In such cases, Novas efficiently estimates the performance of all potential service configurations through a singular value decomposition (SVD)-based collaborative filtering method. Finally, given the NP-hardness of the optimal scheduling problem, a heuristic scheduling strategy that maximizes the minimum remaining resources is devised to schedule the most suitable configurations to servers for execution. We evaluate the effectiveness of Novas through extensive hybrid experiments conducted on a dedicated testbed. Results show that Novas can achieve a substantial over 27× improvement in satisfying the accuracy requirements compared with existing methods adopting fixed configurations, while ensuring latency requirements. Moreover, Novas improves the goodput of the system by an average of 37.86% compared to existing state-of-the-art scheduling solutions."
}
  ,
  {
    id: "AuTraScale",
    title: "AuTraScale: An Automated and Transfer Learning Solution for Streaming System Auto-Scaling",
    authors: [
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" },
        { name: "Wenli Zheng", link: "" },
        { name: "Chao Li", link: "" },
        { name: "Yao Shen", link: "" },
        { name: "Minyi Guo", link: "" }
    ],
    conference: "2021 IEEE International Parallel and Distributed Processing Symposium (IPDPS)",
    date: "17-21 May 2021",
    doi: "10.1109/IPDPS49936.2021.00100",
    externalLink: "https://ieeexplore.ieee.org/document/9460552",
    image: "images/paper/cs-AuTraScale.png",
    abstract: "The complexity and variability of streaming data have brought a great challenge to the elasticity of the data processing systems. Streaming systems, such as Flink and Storm, need to adapt to the changes of workload with auto-scaling to meet the QoS requirements while saving resources. However, the accuracy of classical models (such as a queueing model) for QoS prediction decreases with the increase of the complexity and variability of streaming data and the resource interference. On the other hand, the indirect metrics used to optimize QoS may not accurately guide resource adjustment. Those problems can easily lead to waste of resources or QoS violation in practice. To solve the above problems, we propose AuTraScale, an automated and transfer learning auto-scaling solution, to determine the appropriate parallelism and resource allocation that meet the latency and throughput targets. AuTraScale uses Bayesian optimization to adapt to the complex relationship between resources and QoS, minimizing the impact of resource interference on the prediction accuracy, and a new metric that measures the performance of operators for accurate optimization. Even when the input data rate changes, it can quickly adjust the parallelism of each operator in response, with a transfer learning algorithm. We have implemented and evaluated AuTraScale on a Flink platform. The experimental results show that, compared with the state-of-the-art method like DRS and DS2, AuTraScale can reduce 66.6% and 36.7% resource consumption respectively in the scale-down and scale-up scenarios while ensuring QoS requirements, and save 13.5% resource on average when the input data rate changes."
}
  ,
  {
    id: "Blind",
    title: "The Blind and the Elephant: A Preference-aware Edge Video Analytics Scheduler for Maximizing System Benefit",
    authors: [
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" },
        { name: "Hongzi Zhu", link: "" },
        { name: "Yunzhe Li", link: "" },
        { name: "Jiangang Shen", link: "" },
        { name: "Minyi Guo", link: "" }
    ],
    conference: "ICPP '24: Proceedings of the 53rd International Conference on Parallel Processing",
    date: "August 12 - 15, 2024",
    doi: "10.1145/3673038.3673081",
    externalLink: "https://dl.acm.org/doi/10.1145/3673038.3673081",
    image: "images/paper/cs-Blind.png",
    abstract: "Video analytics is the killer workload in edge computing, which involves the scheduler’s complex decisions to balance analysis performance (latency and accuracy) and resource consumption (network, computation, and energy). Traditional schedulers address this as a single-objective optimization problem with fixed weights, unable to precisely capture unknown system preferences due to intricate pricing rules across various service levels and resource costs, consequently leading to suboptimal system benefit like monetary gain. In this paper, we propose a Bayesian optimization-driven multi-objective scheduler, PaMO, that can proactively explore the system pricing preference by pairwise comparing outcome vectors of all objectives. Moreover, PaMO designs a heuristic scheduling algorithm with a zero-delay jitter guarantee to avoid performance degradation caused by resource contention and uses a revised Bayesian optimization algorithm to make video configuration and scheduling decisions. Experiments on real video analytics workloads show that PaMO can achieve up to 53.9% benefit gain compared to state-of-the-art scheduling methods."
}
  ,
  {
    id: "LoRaPCR",
    title: "LoRaPCR: Long Range Point Cloud Registration through Multi-hop Relays in VANETs",
    authors: [
        { name: "Zhenxi Wang", link: "" },
        { name: "Hongzi Zhu", link: "" },
        { name: "Yunxiang Cai", link: "" },
        { name: "Quan Liu", link: "" },
        { name: "Shan Chang", link: "members/prof-changshan.html" },
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" }
    ],
    conference: "IEEE INFOCOM 2024 - IEEE Conference on Computer Communications",
    date: "20-23 May 2024",
    doi: "10.1109/INFOCOM52122.2024.10621158",
    externalLink: "https://ieeexplore.ieee.org/document/10621158",
    image: "images/paper/cs-LoRaPCR.png",
    abstract: "Point cloud registration (PCR) can significantly extend the visual field and enhance the point density on distant objects, thereby improving driving safety. However, it is very challenging for vehicles to perform online registration between long-range point clouds. In this paper, we propose an online long-range PCR scheme in VANETs, called LoRaPCR, where vehicles achieve long-range registration through multi-hop short-range highly-accurate registrations. Given the NP-hardness of the problem, a heuristic algorithm is developed to determine best registration paths while leveraging the reuse of registration results to reduce computation costs. Moreover, we utilize an optimized dynamic programming algorithm to determine the transmission routes while minimizing the communication overhead. Results of extensive simulations demonstrate that LoRaPCR can achieve high PCR accuracy with low relative translation and rotation errors of 0.55 meters and 1.43°, respectively, at a distance of over 100 meters, and reduce the computation overhead by more than 50% compared to the state-of-the-art method."
}
  ,
  {
    id: "Enabling",
    title: "Enabling Long Range Point Cloud Registration in Vehicular Networks via Muti-Hop Relays",
    authors: [
        { name: "Zhenxi Wang", link: "" },
        { name: "Hongzi Zhu", link: "" },
        { name: "Yunxiang Cai", link: "" },
        { name: "Quan Liu", link: "" },
        { name: "Shan Chang", link: "members/prof-changshan.html" },
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" }
    ],
    conference: "IEEE Transactions on Mobile Computing",
    date: "21 August 2024",
    doi: "10.1109/TMC.2024.3446828",
    externalLink: "https://ieeexplore.ieee.org/abstract/document/10643366",
    image: "images/paper/cs-Enabling.png",
    abstract: "Point cloud registration (PCR) can significantly extend the visual field and enhance the point density on distant objects, thereby improving driving safety. However, it is very challenging for vehicles to perform online registration between long-range point clouds. In this paper, we propose an online long-range PCR scheme in VANETs, called LoRaPCR, where vehicles achieve long-range registration through multi-hop short-range highly-accurate registrations. Given the NP-hardness of the problem, a heuristic algorithm is developed to determine best registration paths while leveraging the reuse of registration results to reduce computation costs. Moreover, we utilize an optimized dynamic programming algorithm to determine the transmission routes while minimizing the communication overhead. To the best of our knowledge, LoRaPCR is the first solution to achieve multi-vehicle point cloud long-range registration. Results of extensive experiments demonstrate that LoRaPCR can achieve high PCR accuracy with low relative translation and rotation errors of 0.55 meters and 1.43°, respectively, at a distance of over 100 meters, and reduce the computation overhead by more than 50% compared to the state-of-the-art method."
}
,
{
  id: "Anole",
  title: "Anole: Adapting Diverse Compressed Models For Cross-Scene Prediction On Mobile Devices",
  authors: [
      { name: "Yunzhe Li", link: "" },
      { name: "Hongzi Zhu", link: "" },
      { name: "Yunlong Cheng", link: "" },
      { name: "Liang Zhang", link: "members/prof-zhangliang.html" },
      { name: "Shan Chang", link: "members/prof-changshan.html" },
      { name: "Minyi Guo", link: "" }
  ],
  conference: "IEEE International Conference on Distributed Computing Systems (ICDCS)",
  date: "23-26 July 2024",
  doi: "10.1109/ICDCS60910.2024.00063",
  externalLink: "https://ieeexplore.ieee.org/document/10630934",
  image: "images/paper/cs-Enabling.png",
  abstract: "Emerging Artificial Intelligence of Things (AIoT) applications desire online prediction using deep neural network (DNN) models on mobile devices. However, due to the movement of devices, unfamiliar test samples constantly appear, significantly affecting the prediction accuracy of a pre-trained DNN. In addition, unstable network connection calls for local model inference. In this paper, we propose a light-weight scheme, called Anole, to cope with the local DNN model inference on mobile devices. The core idea of Anole is to first establish an army of compact DNN models, and then adaptively select the model fitting the current test sample best for online inference. The key is to automatically identify model-friendly scenes for training scene-specific DNN models. To this end, we design a weakly-supervised scene representation learning algorithm by combining both human heuristics and feature similarity in separating scenes. Moreover, we further train a model classifier to predict the best-fit scene-specific DNN model for each test sample. We implement Anole on different types of mobile devices and conduct extensive trace-driven and real-world experiments based on unmanned aerial vehicles (UAV s). The results demonstrate that Anole outwits the method of using a versatile large DNN in terms of prediction accuracy (4.5 % higher), response time (33.1 % faster) and power consumption (45.1 % lower)."
}
  ,
  {
    id: "ENTS",
    title: "ENTS: An Edge-native Task Scheduling System for Collaborative Edge Computing",
    authors: [
        { name: "Mingjin Zhang", link: "" },
        { name: "Jiannong Cao", link: "" },
        { name: "Lei Yang", link: "" },
        { name: "Liang Zhang", link: "members/prof-zhangliang.html" },
        { name: "Yuvraj Sahni", link: "" },
        { name: "Shan Jiang", link: "" }
    ],
    conference: "2022 IEEE/ACM 7th Symposium on Edge Computing (SEC)",
    date: "05-08 December 2022",
    doi: "10.1109/SEC54971.2022.00019",
    externalLink: "https://ieeexplore.ieee.org/document/9996714",
    image: "images/paper/cs-ENTS.png",
    abstract: "Collaborative edge computing (CEC) is an emerging paradigm enabling sharing of the coupled data, computation, and networking resources among heterogeneous geo-distributed edge nodes. Recently, there has been a trend to orchestrate and schedule containerized application workloads in CEC, while Kubernetes has become the de-facto standard broadly adopted by the industry and academia. However, Kubernetes is not preferable for CEC because its design is not dedicated to edge computing and neglects the unique features of edge nativeness. More specifically, Kubernetes primarily ensures resource provision of workloads while neglecting the performance requirements of edge-native applications, such as throughput and latency. Furthermore, Kubernetes neglects the inner dependencies of edge-native applications and fails to consider data locality and networking resources, leading to inferior performance. In this work, we design and develop ENTS, the first edge-native task scheduling system, to manage the distributed edge resources and facilitate efficient task scheduling to optimize the performance of edge-native applications. ENTS extends Kubernetes with the unique ability to collaboratively schedule computation and networking resources by comprehensively considering job profile and resource status. We showcase the superior efficacy of ENTS with a case study on data streaming applications. We mathematically formulate a joint task allocation and flow scheduling problem that maximizes the job throughput. We design two novel online scheduling algorithms to optimally decide the task allocation, bandwidth allocation, and flow routing policies. The extensive experiments on a real-world edge video analytics application show that ENTS achieves 43% -220% higher average job throughput compared with the state-of-the-art."
}
  ,
  {
    id: "FLoomChecker",
    title: "FLoomChecker: Repelling Free-riders in Federated Learning via Training Integrity Verification",
    authors: [
        { name: "Guanghao Liang", link: "members/grad-liangguanghao.html" },
        { name: "Shan Chang", link: "members/prof-changshan.html" },
        { name: "Minghui Dai", link: "members/prof-daiminghui.html" },
        { name: "Hongzi Zhu", link: "" }
    ],
    conference: "2024 IEEE 30th International Conference on Parallel and Distributed Systems (ICPADS)",
    date: "10 - 14 October 2024",
    doi: "10.1109/ICPADS63350.2024.00034",
    externalLink: "https://ieeexplore.ieee.org/abstract/document/10763782",
    image: "images/paper/cs-FLoomChecker.png",
    abstract: "Federated learning is a mechanism that allows participating clients to train locally with their own data in order to receive rewards, thus avoiding the transfer of data to a central server and protecting users’ privacy. However, some “lazy” clients may adopt the strategy of fabricating false model local updates in an attempt to “free-riding” without actually contributing real data or consuming local computational resources. To address this issue, we propose FLoomChecker, an integrity detection scheme for federated learning training models. The scheme combines the techniques of trusted execution environments and Bloom filters to efficiently identify clients that do not train honestly by committing and proving. We conducted experimental evaluations of FLoomChecker, examining three main aspects: query time, build time, and memory footprint in trusted execution environment (TEE). The experimental results demonstrate the effectiveness of our scheme, and its performance improves as the number of local training rounds increases."
}
]


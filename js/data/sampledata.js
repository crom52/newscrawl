const NO_CONTENT = 'Sorry, There is nothing to display';
const NEWS_LIST = [
  {
    id: 1,
    timeAgo: 14,
    title: `Best Trading Opportunity Ever" Says Blockware Analyst, According to On-Chain Metrics`,
    referenceUrl: `https://u.today/best-trading-opportunity-ever-says-blockware-analyst-according-to-on-chain-metrics`,
    content: `Sebasa Mogale, acteur de série à succès et présentateur radio est accusé de fraudes par des investisseurs. En effet, ce dernier aurait lancé un programme d’investissement en bitcoins et aurait escroqué l’argent de ses membres. Ce dernier nie toute accusation et menace de traduire l’affaire devant les tribunaux. Et pourtant selon les informations reçues par les forces de l'ordre, ce dernier...`,
    sourceDomain: `u.today`,
  },
  {
    id: 2,
    timeAgo: 8,
    title: `Peter Brandt: BTC Could Drop to $13,000 and Enter ‘Drano Chart Pattern’`,
    referenceUrl: `https://beincrypto.com/peter-brandt-bitcoin-could-drop-to-13000/`,
    sourceDomain: `beincrypto.com`,
    content: `Peter Brandt, the analyst who predicted the crypto winter of 2018, has said that Bitcoin could continue to drop to $13,000.`,
  },
  {
    id: 3,
    timeAgo: 9,
    title: `True Global Ventures doubles down on Web3 with $146M ‘follow-on’ fund`,
    referenceUrl: `https://cointelegraph.com/news/nexo-price-drops-40-in-three-days-on-rumors-of-ties-to-insolvent-crypto-fund`,
    content: `Dogechain launches its testnet, dramatically evolving the utility of Dogecoin and bringing dApps and DeFi to the community. Dogechain, a blockchain that empowers Doge by bringing dApps to the Doge community, has just launched its testnet. Testnets are an essential component in blockchain development. The Dogechain testnet allows software developers to evaluate the network `,
    sourceDomain: `cointelegraph.com`,
  },
  {
    id: 13,
    timeAgo: 10,
    title: `A year into the boom of NFTs`,
    referenceUrl: `https://cointelegraph.com/news/nexo-price-drops-40-in-three-days-on-rumors-of-ties-to-insolvent-crypto-fund`,
    content: `A year into the boom of NFTs, they are no longer just mere cultural assets but building blocks of Web3. Used for Metaverse experiences, games, and decentralized applications, NFTs are now at the center stage of the blockchain industry. As programmers explore what the new world of NFT-centered projects has to offer, they seek secure`,
    sourceDomain: `cointelegraph.com`,
  },
  {
    id: 10,
    timeAgo: 12,
    title: `The TGV4 Plus Follow On Fund`,
    referenceUrl: `https://cointelegraph.com/news/nexo-price-drops-40-in-three-days-on-rumors-of-ties-to-insolvent-crypto-fund`,
    content: `The TGV4 Plus Follow On Fund was led by a group of 15 general partners who committed over $4 million on average (over 40%) into the fund. `,
    sourceDomain: `cointelegraph.com`,
  },
  {
    id: 9,
    timeAgo: 13,
    title: `Small and retail investors are not the only ones getting hit hard by the Bitcoin crash`,
    referenceUrl: `https://cointelegraph.com/news/nexo-price-drops-40-in-three-days-on-rumors-of-ties-to-insolvent-crypto-fund`,
    content: `Small and retail investors are not the only ones getting hit hard by the Bitcoin crash. Institutional investors are also feeling the heat of the market crash. This has sent the institutional investors running as inflows had halted for the last week. Outflows from crypto and blockchain-related investments grew steadily over the course of the weeks, totaling more than $100. million`,
    sourceDomain: `cointelegraph.com`,
  },
  {
    id: 8,
    timeAgo: 18,
    title: `NEXO price drops 40% in three days on rumors of ties to 'insolvent' crypto fund`,
    referenceUrl: `https://cointelegraph.com/news/nexo-price-drops-40-in-three-days-on-rumors-of-ties-to-insolvent-crypto-fund`,
    content: `Dogechain launches its testnet, dramatically evolving the utility of Dogecoin and bringing dApps and DeFi to the community. Dogechain, a blockchain that empowers Doge by bringing dApps to the Doge community, has just launched its testnet. Testnets are an essential component in blockchain development. The Dogechain testnet allows software developers to evaluate the network `,
    sourceDomain: `cointelegraph.com`,
  },
  {
    id: 7,
    timeAgo: 19,
    title: `Bit.com, the Singapore-based exchange`,
    referenceUrl: `https://cointelegraph.com/news/nexo-price-drops-40-in-three-days-on-rumors-of-ties-to-insolvent-crypto-fund`,
    content: `Bit.com, the Singapore-based exchange, has listed Staked Ether (STETH) on its spot and and perpetual futures markets, according to a recent press release. Bit.com becomes the first cryptocurrency exchange to list STETH, issued by Lido Finance. Lido Finance is a choice crypto staking provider allowing individuals who can’t meet the steep 32 ETH threshold to`,
    sourceDomain: `cointelegraph.com`,
  },
].sort((a, b) => a.timeAgo - b.timeAgo);
let imagePath = 'https://docs.webix.com/samples/30_comments/common/imgs/';
const USER_LIST = [
  { id: 1, value: 'Corvo Attano', image: imagePath + 'corvo.jpg' },
  { id: 2, value: 'Daisy Fitzroy', image: imagePath + 'daisy.jpg' },
  { id: 3, value: 'Glenn Crake', image: imagePath + 'glenn.jpg' },
  { id: 4, value: 'Me', image: imagePath + 'tomek.jpg' },
  { id: 5, value: 'Leia Organa', image: imagePath + 'leia.jpg' },
];

const COMMENT_SAMPLE = [
  {
    id: 1,
    user_id: 1,
    date: '2018-06-10 18:45',
    text: 'Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what.',
  },
  {
    id: 2,
    user_id: 2,
    date: '2018-06-12 19:40',
    text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result.",
  },
  {
    id: 3,
    user_id: 3,
    date: '2018-06-12 20:16',
    text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work.",
  },
  {
    id: 4,
    user_id: 4,
    date: '2018-06-14 21:57',
    text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated).",
  },
  {
    id: 5,
    user_id: 5,
    date: '2018-06-14 22:01',
    text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last.",
  },
  {
    id: 7,
    user_id: 3,
    date: '2018-06-14 22:43',
    text: 'Wow great, could you please share a link to this tool? Cannot wait for playing around with it.',
  },
  {
    id: 9,
    user_id: 3,
    date: '2018-06-14 23:15',
    text: 'Thanks a million ;)',
  },
];

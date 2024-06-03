import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appCustomDirective } from './custom.directive';
import { LooperDirective } from './looper.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, appCustomDirective, LooperDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  currPage = 0;

  checkIndexs(i: number) {
    return Math.abs(this.currPage - i) < 5;
  }

  posts = [
    {
      title: 'The Tale of Sinuhe: An Egyptian Epic',
      tags: ['Egyptian Literature', 'Ancient Egypt', 'Classics'],
      description:
        "The Tale of Sinuhe is one of the most renowned pieces of ancient Egyptian literature, telling the story of Sinuhe, a court official who flees Egypt upon hearing of Pharaoh Amenemhat I's assassination. The tale, written in Middle Egyptian and dating back to the 12th Dynasty (c. 1991–1802 BCE), is an autobiographical narrative that explores themes of loyalty, identity, and the human condition. Sinuhe's journey from Egypt to Canaan and his eventual return is marked by trials, self-discovery, and a longing for home. The story is notable for its poetic form and its portrayal of the ideal Egyptian life. The description of Sinuhe's interactions with various foreign peoples and cultures provides valuable insights into ancient Egyptian views on foreigners. The text also reflects the political and social norms of the Middle Kingdom period, highlighting the importance of the Pharaoh and the concept of Ma'at (order, balance, and justice). Sinuhe's tale is often compared to other ancient texts like the Epic of Gilgamesh for its rich narrative and deep moral undertones.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Instruction of Ptahhotep: Wisdom of the Ages',
      tags: ['Egyptian Literature', 'Wisdom Literature', 'Ancient Texts'],
      description:
        'The Instruction of Ptahhotep is a collection of maxims and advice attributed to Ptahhotep, an ancient Egyptian vizier during the late 25th century BCE. This work is considered one of the oldest pieces of wisdom literature, aiming to teach young men the virtues and ethics necessary for success and harmonious living. The text covers a wide range of topics, including humility, justice, and proper conduct. Each maxim is crafted to provide practical guidance on navigating social and professional relationships. The instructions emphasize the importance of listening, being fair, and respecting elders, highlighting the timeless values that were crucial in ancient Egyptian society. This literary piece not only offers a glimpse into the ethical and moral framework of ancient Egypt but also reveals the sophistication and depth of their philosophical thought. The Instruction of Ptahhotep continues to be studied for its literary and historical significance, offering insights into the wisdom traditions that have shaped human thought across millennia.',
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Eloquent Peasant: A Tale of Social Justice',
      tags: ['Egyptian Literature', 'Social Justice', 'Ancient Stories'],
      description:
        "The Eloquent Peasant is a classic work of Egyptian literature that dates back to the Middle Kingdom period. The story follows Khun-Anup, a peasant who travels to sell his goods and is robbed by a greedy official. Deprived of his livelihood, Khun-Anup seeks justice from Rensi, the high steward. The tale unfolds as Khun-Anup eloquently presents his case through a series of nine petitions, each more persuasive and poetic than the last. This narrative is remarkable for its exploration of themes such as justice, eloquence, and the power of speech. It provides a profound commentary on the legal and social systems of ancient Egypt, illustrating the ideals of fairness and moral integrity. The peasant's eloquence and determination highlight the importance of justice and the role of the ruler in upholding Ma'at. The Eloquent Peasant not only entertains but also serves as a reflection on the values and concerns of its time, making it a timeless piece of literature that resonates with readers to this day.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Shipwrecked Sailor: An Egyptian Fairy Tale',
      tags: ['Egyptian Literature', 'Fairy Tales', 'Mythology'],
      description:
        "The Shipwrecked Sailor is an ancient Egyptian tale from the Middle Kingdom, recounting the adventures of a sailor who survives a shipwreck and encounters a giant serpent on a magical island. This tale begins with the sailor's recount of his voyage to a nobleman. He describes how his ship was caught in a storm, leading to a shipwreck that he alone survived. Stranded on an island, he meets a colossal serpent who rules the island and possesses immense wisdom. The serpent tells the sailor about its own past and offers him food and shelter. As days pass, the serpent prophesies the sailor's rescue and eventual return to Egypt. The tale explores themes of fate, divine intervention, and human resilience. The serpent's wise words and the sailor's experience reflect ancient Egyptian beliefs in the gods' influence over mortal lives and the idea of destiny. The story is rich in moral lessons, such as the importance of hope and gratitude. The Shipwrecked Sailor remains a captivating piece of Egyptian literature that highlights the narrative traditions and imaginative storytelling of ancient Egypt.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: "The Story of Wenamun: An Egyptian's Travels",
      tags: ['Egyptian Literature', 'Travel', 'Historical Texts'],
      description:
        "The Story of Wenamun is an ancient Egyptian narrative that chronicles the journey of Wenamun, a priest of Amun, who travels to the Levant to procure cedar wood for the construction of a sacred barque. Written in the 11th century BCE during the decline of the New Kingdom, this story provides a vivid depiction of the political and social climate of the time. Wenamun's journey is fraught with challenges, including theft, hostility, and diplomatic negotiations. The text offers a rare glimpse into the interactions between Egypt and other cultures, highlighting the complexities of trade and diplomacy. Wenamun's experiences reflect the waning influence of Egypt in the region and the difficulties faced by its envoys. The story is notable for its realistic portrayal of the hardships and uncertainties of long-distance travel in the ancient world. It also sheds light on the administrative and religious practices of the time. The Story of Wenamun is a valuable historical document that enriches our understanding of ancient Egyptian society and its external relations.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Tale of the Two Brothers: A Story of Betrayal and Loyalty',
      tags: ['Egyptian Literature', 'Mythology', 'Family'],
      description:
        "The Tale of the Two Brothers is an ancient Egyptian story that explores themes of betrayal, loyalty, and divine justice. It tells the story of two brothers, Anpu and Bata, who live and work together. Anpu, the elder brother, is married, while Bata remains single. The story begins with Anpu's wife attempting to seduce Bata, who rejects her advances. Angered by his rejection, she falsely accuses Bata of assault. Anpu, believing his wife, decides to kill Bata. However, Bata flees and prays to the gods for help. The gods intervene, and Bata's innocence is revealed. The tale continues with Bata undergoing a series of transformations and adventures, including his death and resurrection, and eventually becoming king. Anpu, after realizing his wife's treachery, kills her and searches for his brother. The tale is rich in symbolism and reflects ancient Egyptian beliefs in the gods' direct involvement in human affairs. The story's themes of familial bonds, moral integrity, and divine retribution resonate deeply, making it a timeless piece of literature that continues to captivate audiences.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Maxims of Ptahhotep: Ancient Wisdom for Modern Times',
      tags: ['Egyptian Literature', 'Wisdom', 'Philosophy'],
      description:
        'The Maxims of Ptahhotep, also known as The Instruction of Ptahhotep, is a collection of advice and wisdom from Ptahhotep, an ancient Egyptian vizier. This text, dating back to the Old Kingdom, is one of the earliest known works of wisdom literature. Ptahhotep offers guidance on a wide range of topics, including leadership, humility, social conduct, and personal integrity. Each maxim is designed to instruct young men on how to live virtuously and navigate the complexities of life. The text emphasizes the importance of listening, respect for elders, and the pursuit of knowledge. It also addresses issues such as justice, friendship, and family dynamics. The Maxims of Ptahhotep reflect the values and ethical principles that were highly regarded in ancient Egyptian society. Despite being written thousands of years ago, the wisdom contained in these maxims remains relevant today, offering timeless insights into human behavior and the pursuit of a good life. The text is a testament to the enduring legacy of ancient Egyptian thought and its influence on subsequent generations.',
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Legend of Isis and Osiris: A Tale of Love and Resurrection',
      tags: ['Egyptian Literature', 'Mythology', 'Deities'],
      description:
        "The Legend of Isis and Osiris is one of the most famous stories in ancient Egyptian mythology, detailing the lives, love, and trials of the deities Isis and Osiris. Osiris, the god of the afterlife, and his sister-wife Isis are central figures in this myth, which begins with Osiris ruling Egypt as a benevolent and just king. His brother, Set, jealous of Osiris's power and popularity, plots to kill him. Set tricks Osiris into entering a beautifully crafted chest, which he then seals and throws into the Nile River. Isis, heartbroken and determined, embarks on a quest to find her husband's body. After many trials, she locates Osiris's body, but Set discovers it and dismembers it, scattering the pieces across Egypt. Undeterred, Isis retrieves and reassembles Osiris's body with the help of her sister Nephthys and the god Anubis. Using her magical abilities, Isis resurrects Osiris long enough to conceive their son, Horus. The myth continues with Horus growing up to avenge his father's death and ultimately defeating Set. This tale embodies themes of love, loyalty, resurrection, and justice. The legend of Isis and Osiris has been a cornerstone of Egyptian religious beliefs, illustrating the eternal struggle between good and evil and the power of love and perseverance.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title:
        'The Instruction of Amenemope: Guiding Principles of Ancient Egypt',
      tags: ['Egyptian Literature', 'Wisdom Literature', 'Ethics'],
      description:
        "The Instruction of Amenemope is a well-known ancient Egyptian text that provides moral and practical advice for leading a virtuous life. Composed during the late New Kingdom period, this wisdom literature is attributed to Amenemope, a scribe. The text is divided into thirty chapters, each offering guidance on various aspects of daily life, such as integrity, humility, and the importance of hard work. Amenemope's maxims emphasize the value of contentment, caution against greed and dishonesty, and advocate for fairness and compassion. The text also includes reflections on the nature of wealth, the fleeting nature of life, and the importance of maintaining harmonious relationships. The Instruction of Amenemope is notable for its literary quality and profound insights into human behavior and ethical conduct. Its teachings have been compared to those found in the Hebrew Bible's Book of Proverbs, suggesting a shared tradition of wisdom literature in the ancient Near East. The enduring relevance of Amenemope's advice highlights the universal nature of his insights, making this text a valuable source of guidance for modern readers.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Tale of the Doomed Prince: A Story of Fate and Adventure',
      tags: ['Egyptian Literature', 'Adventure', 'Mythology'],
      description:
        "The Tale of the Doomed Prince is an ancient Egyptian narrative that tells the story of a prince whose fate is determined by the gods before his birth. The prince is destined to die by either a crocodile, a snake, or a dog. To protect him, his father, the king, builds a house in the desert, far from these threats. However, as the prince grows older, he becomes curious about the world and leaves his isolated home. His adventures take him to a foreign land where he falls in love with a princess. Despite the ominous prophecy, the prince faces numerous challenges with courage and determination. The tale explores themes of destiny, courage, and the human spirit's resilience. The story's ending, unfortunately lost to history, leaves readers contemplating the prince's ultimate fate. The Tale of the Doomed Prince is a fascinating example of ancient Egyptian storytelling, reflecting their beliefs in fate and the influence of the gods on human lives. It remains a captivating tale that continues to intrigue scholars and enthusiasts of ancient literature.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Book of the Dead: Ancient Egyptian Guide to the Afterlife',
      tags: ['Egyptian Literature', 'Afterlife', 'Religious Texts'],
      description:
        "The Book of the Dead is a collection of funerary texts consisting of spells, prayers, and incantations designed to guide the deceased through the afterlife. These texts, written on papyrus and placed in tombs, were believed to help the dead navigate the dangers of the underworld and achieve eternal life. The Book of the Dead was used from the beginning of the New Kingdom (around 1512 BCE) to around 12 BCE. It represents a culmination of Egyptian religious beliefs about death and the afterlife, combining earlier traditions and rituals. The spells in the Book of the Dead address various aspects of the afterlife journey, from ensuring the deceased's heart is not weighed down by sin to invoking protective deities. One of the most famous spells, the 'Weighing of the Heart,' depicts the judgment scene where the deceased's heart is weighed against the feather of Ma'at. This text is not just a religious document but a rich source of Egyptian mythology, iconography, and cosmology. The Book of the Dead provides invaluable insights into the Egyptian worldview and their intricate beliefs about life, death, and rebirth.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Tale of the Herdsman: A Story of Love and Mystery',
      tags: ['Egyptian Literature', 'Love', 'Mystery'],
      description:
        "The Tale of the Herdsman is an ancient Egyptian story that revolves around a young herdsman who encounters a mysterious and enchanting woman while tending to his cattle. Set in the time of the Middle Kingdom, the tale explores themes of love, mystery, and the supernatural. The herdsman, while grazing his cattle near a marsh, is approached by a beautiful woman who emerges from the reeds. She entices him with her charm and beauty, leading to a romantic encounter. The woman, however, is not what she seems, and her true nature remains a mystery. The tale ends abruptly, leaving many questions unanswered and adding to the story's enigmatic allure. The Tale of the Herdsman highlights the Egyptian fascination with the supernatural and the unknown. It reflects the cultural values and beliefs of the time, particularly the themes of love, beauty, and the supernatural. This story, with its blend of romance and mystery, continues to captivate readers, offering a glimpse into the rich tapestry of ancient Egyptian narrative tradition.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Tale of the Two Brothers: A Story of Betrayal and Loyalty',
      tags: ['Egyptian Literature', 'Mythology', 'Family'],
      description:
        "The Tale of the Two Brothers is an ancient Egyptian story that explores themes of betrayal, loyalty, and divine justice. It tells the story of two brothers, Anpu and Bata, who live and work together. Anpu, the elder brother, is married, while Bata remains single. The story begins with Anpu's wife attempting to seduce Bata, who rejects her advances. Angered by his rejection, she falsely accuses Bata of assault. Anpu, believing his wife, decides to kill Bata. However, Bata flees and prays to the gods for help. The gods intervene, and Bata's innocence is revealed. The tale continues with Bata undergoing a series of transformations and adventures, including his death and resurrection, and eventually becoming king. Anpu, after realizing his wife's treachery, kills her and searches for his brother. The tale is rich in symbolism and reflects ancient Egyptian beliefs in the gods' direct involvement in human affairs. The story's themes of familial bonds, moral integrity, and divine retribution resonate deeply, making it a timeless piece of literature that continues to captivate audiences.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Story of the Taking of Joppa: A Military Prowess Tale',
      tags: ['Egyptian Literature', 'Military', 'Historical'],
      description:
        "The Story of the Taking of Joppa is an ancient Egyptian narrative that highlights the cunning and military prowess of Djehuti, an officer under Pharaoh Thutmose III. Set during the 18th Dynasty, this tale recounts the capture of the fortified city of Joppa (modern-day Jaffa) in a unique and strategic manner. The story begins with Djehuti devising a plan to deceive the city's inhabitants. He pretends to surrender and sends gifts hidden within baskets carried by soldiers. Once inside the city, the soldiers emerge and take control, leading to a swift and decisive victory. The tale emphasizes themes of strategy, intelligence, and the importance of leadership. It reflects the military tactics and the value placed on ingenuity in ancient Egyptian warfare. The Story of the Taking of Joppa is not only an entertaining account but also provides insights into the historical and cultural context of Egyptian military campaigns. It remains a testament to the storytelling prowess of ancient Egypt and its rich narrative traditions.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title: 'The Prophecy of Neferti: A Vision of Restoration',
      tags: ['Egyptian Literature', 'Prophecy', 'Historical'],
      description:
        'The Prophecy of Neferti is an ancient Egyptian text that presents a vision of political and social restoration during times of chaos. Set in the First Intermediate Period, this work is attributed to Neferti, a sage at the court of Pharaoh Snefru. The text is framed as a prophecy delivered by Neferti, who predicts a period of great turmoil and suffering, followed by the rise of a righteous king who will restore order and prosperity. This king is often identified with Amenemhat I, the founder of the 12th Dynasty. The prophecy reflects the concerns and hopes of the Egyptian people during times of instability, emphasizing the importance of a strong and just ruler. The text is notable for its poetic language and vivid imagery, painting a picture of a society in turmoil and the promise of renewal. The Prophecy of Neferti provides valuable insights into the political and social dynamics of ancient Egypt, illustrating the role of prophecy and ideology in shaping historical narratives. It remains an important piece of literature that highlights the interplay between myth, politics, and culture in ancient Egyptian society.',
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    {
      title:
        'The Tale of the Princess of Bakhtan: A Story of Divine Intervention',
      tags: ['Egyptian Literature', 'Divine Intervention', 'Mythology'],
      description:
        "The Tale of the Princess of Bakhtan is an ancient Egyptian narrative that recounts the story of a princess afflicted by a mysterious illness and the divine intervention that leads to her cure. Set during the reign of Pharaoh Ramses II, the tale begins with the arrival of envoys from Bakhtan, a foreign land, seeking help for their princess who is possessed by an evil spirit. Ramses II sends his magician, Djehutyemheb, to Bakhtan to exorcise the spirit. Despite his efforts, Djehutyemheb fails, and the spirit demands the presence of the god Khonsu. Ramses II then sends a statue of Khonsu to Bakhtan, and upon its arrival, the god expels the spirit, curing the princess. The tale highlights themes of divine power, faith, and the importance of religious rituals. It reflects the ancient Egyptian belief in the gods' active involvement in human affairs and their ability to heal and protect. The Tale of the Princess of Bakhtan is a fascinating example of Egyptian narrative tradition, showcasing the interplay between religion and storytelling in ancient Egyptian culture.",
      image: `https://picsum.photos/300/400?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
  ];
}

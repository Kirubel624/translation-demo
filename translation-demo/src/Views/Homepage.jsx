import React, { useState } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const { Option } = Select;

const Homepage = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
 const renderParagraphs = (text) => {
   return text
     .split("\n")
     .map((paragraph, index) => <p key={index}>{paragraph}</p>);
 };

  const postData = {
    postTitle_en: "What Are Stocks?",
    postTitle_am: "አክሲዮኖች ምንድን ናቸው?",
    postDescription_en:
      "A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called `shares` which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own. Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios. Stock trades have to conform to government regulations meant to protect investors from fraudulent practices.",
    postDescription_am:
      "አክሲዮን፣ እንዲሁም እክዊቲ በመባል የሚታወቀው፣ የአንድ ኮርፖሬሽንን ከፊል ባለቤትነትን የሚወክል ዋስትና ነው። የአክሲዮን ድርሻ ወይንም ሼርስ የሚባሉት አንድን የአክሲዮን ባለቤት እንዳላቸው የአክሲዮን ድርሻ መጠን የኮርፖሬሽኑን ሀብትና ትርፍ እንዲጋሩ መብት ይሰጣል።\n አክሲዮኖች በብዛት የሚገዙት እና የሚሸጡት በአክሲዮን መገበያያዎች ወይንም ስቶክ ኤክስቼንጅ ላይ ሲሆን የበርካታ የግል ኢንቬስተሮች ፖርትፎሊዮ መሰረት ናቸው። የአክሲዮን ግብይቶች ኢንቬስተሮችን ከማጭበርበር ድርጊቶች ለመጠበቅ የታቀዱ የመንግስት ደንቦችና ህጎችን ማክበር አለባቸው።",
    postKeyTakeAways: {
      keyTakeAwayTitle_am: "ዋና ሃሳቦች",
      keyTakeAwayTitle_en: "KEY TAKEAWAYS",
      keyTakeAways_am: [
        "አክሲዮን የአንድ ኮርፖሬሽንን ከፊል ባለቤትነትን የሚወክል ዋስትና ነው እናም በብዛት በአክሲዮን መገበያያዎች ወይንም ስቶክ ኤክስቼንጅ ላይ ይሸጣል።",
        "ኮርፖሬሽኖች የንግድ ስራቸውን ለመስራት የሚያስፈልጋቸውን ገንዘብ ለማሰባሰብ አክሲዮን ይሸጣሉ።",
        "ሁለት ዋና ዋና የአክሲዮን ዓይነቶች አሉ - ኮመን እና ፕሪፈርድ።",
        "በታሪክ አኳያ ፣ አክሲዮኖች በረጅም ጊዜ ሲታዩ ከሌላ የኢንቬስትመንት አማራጮች በልጠው ታይተዋል።",
      ],
      keyTakeAways_en: [
        "A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation and is sold predominantly on stock exchanges.",
        "Corporations issue stock to raise funds to operate their businesses.",
        "There are two main types of stock: common and preferred.",
        "Historically, stocks have outperformed most other investments over the long run.",
      ],
    },
  };

  const handleLanguageChange = (values) => {
    setSelectedLanguage(values);
    i18n.changeLanguage(values);
  };

  return (
    <div className="flex flex-col justify-start items-start h-full mb-10">
      <div className="flex flex-col items-end justify-end pt-10 pb-4 pr-10 w-full">
        <Select
          value={selectedLanguage}
          onChange={handleLanguageChange}>
          <Option value="am">አማርኛ</Option>
          <Option value="en">English</Option>
        </Select>
      </div>
      <article className="px-10">
        <h2 className="font-medium text-2xl pb-2">
          {postData[`postTitle_${selectedLanguage}`]}
        </h2>
        <p>
          {renderParagraphs(postData[`postDescription_${selectedLanguage}`])}
        </p>
        <div>
          <h3 className="pt-4 pb-1">
            {postData.postKeyTakeAways[`keyTakeAwayTitle_${selectedLanguage}`]}
          </h3>
          <ul className="list-disc pl-5">
            {postData.postKeyTakeAways[`keyTakeAways_${selectedLanguage}`].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Homepage;

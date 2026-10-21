import NovelIntro from './NovelIntro.jsx';
import NovelFormat from './NovelFormat.jsx';
import NovelCharacters from './NovelCharacters.jsx';
import NovelReader from './NovelReader.jsx';
import NovelStore from './NovelStore.jsx';
import NovelAccount from './NovelAccount.jsx';
import NovelPricing from './NovelPricing.jsx';
import NovelHonesty from './NovelHonesty.jsx';
import './novel.css';

// Everything about LLD-Novel lives in this folder.
export default function Novel() {
  return (
    <div id="novel" className="novel product">
      <NovelIntro />
      <NovelFormat />
      <NovelCharacters />
      <NovelReader />
      <NovelStore />
      <NovelAccount />
      <NovelPricing />
      <NovelHonesty />
    </div>
  );
}

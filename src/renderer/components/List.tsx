import { Accordion } from '@chakra-ui/react';
import { useContext } from 'react';
import { SearchContext } from 'renderer/context/SearchContext';
import { TabContext } from 'renderer/context/TabContext';
import BrowserCollapse from './BrowserCollapse';

const List = () => {
  const { tabs } = useContext(SearchContext);

  const { currentTabIndex, setTabIndex } = useContext(TabContext);

  const onOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    if (currentTabIndex === index) {
      setTabIndex?.(0);
    } else {
      setTabIndex?.(index);
    }
  };

  return (
    <div>
      <Accordion
        width="95vw"
        allowToggle
        _hover={{}}
        index={currentTabIndex}
        border="none"
        backgroundColor="#32363e"
        margin="10px"
        overflowY="scroll"
      >
        {tabs?.map((tab, index) => (
          <BrowserCollapse
            key={tab.tabId}
            name={tab.keyword}
            tabUrl={tab.url}
            tabId={tab.tabId}
            onOpen={onOpen}
            index={index}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default List;

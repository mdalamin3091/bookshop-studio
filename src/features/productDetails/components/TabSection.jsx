import { Tabs } from '@mantine/core';

const TabSection = () => {
  return (
    <Tabs color="primaryColors.0" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first" color="primaryColors.0" tt="uppercase">Overview</Tabs.Tab>
        <Tabs.Tab value="second" color="primaryColors.0" tt="uppercase">Gallery</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="md">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="md">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabSection;
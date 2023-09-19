import { Carousel } from "@mantine/carousel";
import { Tabs } from "@mantine/core";

const TabSection = ({ data }) => {
  return (
    <Tabs
      color="primaryColors.0"
      defaultValue={data.overview ? "overview" : "gallery"}
    >
      <Tabs.List>
        {data?.overview && (
          <Tabs.Tab value="overview" color="primaryColors.0" tt="uppercase">
            Overview
          </Tabs.Tab>
        )}
        {data?.gallery && (
          <Tabs.Tab value="gallery" color="primaryColors.0" tt="uppercase">
            Gallery
          </Tabs.Tab>
        )}
      </Tabs.List>

      <Tabs.Panel value="overview" pt="md">
        {data?.overview}
      </Tabs.Panel>

      <Tabs.Panel value="gallery" pt="md">
        <Carousel
          mx="auto"
          slideSize="16.666%"
          withControls={false}
          slideGap="xl"
          align="start"
          slidesToScroll={1}
        >
          {data?.gallery &&
            data?.gallery.map((item, index) => (
              <Carousel.Slide
                align="center"
                justify="flex-start"
                key={data?.id}
              >
                <img
                  src={item.src || data.thumbnail.src}
                  alt={item.alt || data.thumbnail.alt}
                  key={data?.id}
                  style={{ width: "100%" }}
                />
              </Carousel.Slide>
            ))}
        </Carousel>
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabSection;

import {Flex, Box, IconButton} from "theme-ui";

export default function List({items = [], parentStyle, childStyle}) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map((item) => (
        <Flex
          key={item.i}
          as="li"
          className={item.isAvailable ? "open" : "closed"}
          sx={{...childStyle}}
        >
          <IconButton aria-label="list icon" sx={styles.listIcon}>
            {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px",
  },
};

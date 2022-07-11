const core = require("./core");

test(
  "prints a schema to test partition-specific features ignoring partition parents and using partitions",
  core.test(["partitioned"], {
    graphileBuildOptions: {
      pgUsePartitionParents: false,
    },
  })
);
test(
  "prints a schema to test partition-specific features using partition parents and ignoring partitions",
  core.test(["partitioned"], {
    graphileBuildOptions: {
      pgUsePartitionParents: true,
    },
  })
);

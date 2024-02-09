# Question: How do you clone a graph using Depth First Search (DFS)? JavaScript Summary

The provided JavaScript code is a solution for cloning a graph using the Depth First Search (DFS) algorithm. The code begins by defining a Node class, which is used to create nodes for the graph. Each node has a value and an array of its neighbors. The main function, `cloneGraph`, is designed to clone a given graph. If the input node is null, it returns null. Otherwise, it creates a Map object to store the original nodes and their corresponding cloned nodes. This map is used to prevent cloning the same node more than once, which is crucial for handling cycles in the graph. The `cloneGraph` function also contains a nested helper function, `dfs`, which performs the actual DFS traversal and cloning process. It checks if a node has been cloned before by looking it up in the map. If it has, it returns the cloned node; if not, it creates a clone, stores it in the map, and recursively clones all its neighbors. The `cloneGraph` function is then used to clone a graph, and the cloned graph is logged to the console.

---

# TypeScript Differences

The TypeScript version of the solution is very similar to the JavaScript version. The main difference is that TypeScript includes type annotations, which provide a way to enforce certain types of values. This can help catch errors during development and make the code easier to understand.

In the TypeScript version, the `Node` class is defined with type annotations for its properties `val` and `neighbors`. The `val` property is a number and `neighbors` is an array of `Node` objects. The constructor parameters also have type annotations, and are optional (indicated by the `?`).

The `cloneGraph` function in TypeScript version has a type annotation for its parameter and return value, indicating that it can take a `Node` object or `null`, and will return a `Node` object or `null`. The `dfs` function also has type annotations for its parameters and return value.

The TypeScript version also uses the non-null assertion operator (`!`) when calling `map.get(node)`. This tells TypeScript that the result of `map.get(node)` will not be `null` or `undefined`, which can be useful if TypeScript's strict null checks are enabled.

In terms of functionality, both versions of the code do the same thing: they clone a graph using Depth First Search. They both use a `Map` to keep track of visited nodes and avoid cycles, and they both use a helper function (`dfs`) to perform the actual cloning. The cloned graph is then logged to the console.

---

# C++ Differences

The C++ version of the solution follows a similar approach to the JavaScript version. It also uses Depth First Search (DFS) to clone the graph and uses a map (in this case, an unordered_map) to keep track of visited nodes and avoid cycles. 

However, there are some differences due to the language features and syntax of C++:

1. In C++, the Node structure is defined using `struct` keyword instead of a `class` keyword as in JavaScript. The Node structure in C++ has a constructor that can be overloaded to initialize the node with different parameters.

2. In C++, pointers are used to reference nodes (`Node* node`). This is different from JavaScript where objects are automatically passed by reference.

3. The `cloneGraph` function is a member function of a `Solution` class in C++. This is different from JavaScript where `cloneGraph` is a standalone function. The `copies` map is also a private member of the `Solution` class.

4. In C++, the `new` keyword is used to create a new instance of a Node. This is different from JavaScript where the `new` keyword is used to create a new instance of a class.

5. The C++ version uses the `->` operator to access the members of a Node pointer, while the JavaScript version uses the `.` operator to access the members of a Node object.

6. The C++ version uses the `cout` statement to print the value of the cloned graph node, while the JavaScript version uses the `console.log` function.

7. Memory management is different in C++ and JavaScript. In C++, you need to manually delete any dynamically allocated memory (using `new`) to avoid memory leaks. In JavaScript, garbage collection is handled automatically.

---

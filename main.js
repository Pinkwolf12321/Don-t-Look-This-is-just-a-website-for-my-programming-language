function runLEWS() {
    const code = document.getElementById("codeInput").value;
    const output = document.getElementById("output");

    // Very simple simulated interpreter
    let lines = code.split("\n");
    let memory = [];
    let vars = {};
    let outText = "";

    lines.forEach(line => {
        line = line.trim();
        if(line.startsWith("var ")) {
            let match = line.match(/var (\w+) \((.+)\)/);
            if(match) {
                vars[match[1]] = eval(match[2]);
            }
        }
        if(line.startsWith("mem[")) {
            let match = line.match(/mem\[(\d+)\] = (.+)/);
            if(match) {
                memory[parseInt(match[1])] = eval(match[2]);
            }
        }
        if(line.startsWith("out ")) {
            let val = line.slice(4);
            try {
                outText += eval(val) + "\n";
            } catch {
                outText += val + "\n";
            }
        }
        if(line.startsWith("spawn ")) {
            outText += "Spawning apps: simulated\n";
        }
    });

    output.textContent = outText;
}

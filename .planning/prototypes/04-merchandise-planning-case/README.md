## Case study: Merchandise Planning / Boot Barn

### Surface
**Decide / Learn.** This case explains why a data-intensive planning UI needs explicit architectural control rather than just a table component.

### Story arc
1. Budget planners need to compare planned and actual values by merchandise category.
2. Multiple views, detail levels, preferences and interdependent metrics make the client complex.
3. Architecture: TreeGrid + a client-side calculation layer + deliberate feedback and recovery mechanisms.
4. Responsibility: frontend architecture, calculation order, input resilience, UX, testing/CI contribution and coordination.
5. NDA boundaries: no record count, proprietary metrics or retired system name.

### Slop self-audit
**Score: 0/10.** The spreadsheet-like visual is an abstract explanatory device, not fabricated product data. The page uses a distinct decision-flow diagram appropriate to the case rather than repeating the HELIX architecture diagram.

### Approval focus
Confirm whether the case makes the key argument clear: the difficult work was controlling complex client-side relationships and failure modes, not merely rendering a grid.

After approval, the next page is **Experience**.
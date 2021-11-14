<div>
  <p><slot /></p>
</div>

<style>
  p {
    position: relative;
    text-transform: uppercase;
    font-size: var(--fsText);
    padding-top: 0.4rem;
    font-weight: var(--fwMedium);
  }
  p::before {
    content: '';
    position: absolute;
    top: 0;
    background-color: var(--clrBlue);
    width: 4rem;
    height: 2px;
    border-radius: var(--brRadius);
  }
</style>
